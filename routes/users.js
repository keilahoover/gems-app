//most recent version

'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');
const humps = require('humps');
const KEY = process.env.JWT_KEY
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


/* GET users listing. */
router.get('/', (req, res, next) => {
  knex('users')
    .select('*')
    .then((users) => {
      res.render('users', {
        title: 'Sign Up',
        users
      });
    })
});

/*POST sign up */

router.post('/' , (req,res,next) => {
  let hashed = bcrypt.hashSync(req.body.password, 8);
  knex('users')
  .insert(humps.decamelizeKeys({
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    email: req.body.email,
    hashed_password: hashed
  }))
  .returning(['id', 'first_name', 'last_name', 'email'])
  .then((data) => {
    res.json(humps.camelizeKeys(data[0]))
  })
  .catch((err) => {
    next(err)
  })

})

router.delete('/', (req, res, next) => {
  if (req.cookies.token) {
    let token = jwt.decode(req.cookies.token)
    knex('users')
      .where('id', token.id)
      .del()
      .returning('*')
      .then(data => {
        res.json(humps.camelizeKeys(data[0]))

      })

  } else {
    res.status(401).type('text/plain').send('Unauthorized')
  }

})



module.exports = router;
