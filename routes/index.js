//most recent version

'use strict';


const express = require('express');
const router = express.Router();
const knex = require('../knex');
const humps = require('humps');
const KEY = process.env.JWT_KEY
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


router.get('/', function(req, res, next) {
 res.render('index', { title: 'GEMS' });
})


/* login to an account */
router.post('/', (req, res, next) => {
  //console.log('req.body', req.body);
  knex('users')
    .where('email', req.body.email)
    .then((data) => {
      if (data.length > 0) {
        const user = {
          id: data[0].id,
          firstName: data[0].first_name,
          lastName: data[0].last_name,
          email: data[0].email
        }
        bcrypt.compare(req.body.password, data[0].hashed_password)
        .then((result) => {
          if (result === true && req.body.email === data[0].email) {
            let signedUser = jwt.sign(user, KEY)

            res.cookie('token', signedUser, {
              path: '/',
              httpOnly: true
            })

            res.render('index', { title: 'GEMS', signinSuccess: true });
          } else {
            // log
            res.status(400).type('text/plain')
            .send("Bad email or password")
          }

        })
        .catch((err) => `>>> CRAAAAAAAPPPPPPPPPPP ${err}`)
      } else {
        res.status(400).type('text/plain')
        .send("Bad email or password")
      }

    })
    .catch((err) => `>>> CRAAAAAAAPPPPPPPPPPP ${err}`)
  })

  router.delete('/', (req, res, next) => {
  res.cookie('users', '').json(true)
})


  module.exports = router;
