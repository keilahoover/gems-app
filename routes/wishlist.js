'use strict';

const express = require('express');
const router = express.Router();
const humps = require('humps');
const knex = require('../knex');
const jwt = require('jsonwebtoken');

const authenticated = (req, res, next) => {
  console.log('cookies :', req.cookies);
  if (req.cookies.token) {
    jwt.verify(req.cookies.token, process.env.JWT_KEY, (err, payload) => {
      if (err) next (err)
      req.token = payload
    })
  } else {
    next({ output: { statusCode: 401 }, message: 'Unauthorized'})
  }
  next()
}

router.get('/', authenticated, (req, res, next) => {
  knex('wishlist')
  .join('products', 'wishlist.products_id', 'products.id')
  .select('*')
  .then((allItems) => {
    res.render('wishlist', {
      title: 'Wishlist',
      allItems
    })
  })
  .catch((err) => console.log('err: ', err))
});

router.post('/', (req, res, next) => {
  // const token = jwt.decode(req.cookies.token)
  console.log('REQ BODY', req.body)

  knex('wishlist')
    .insert({
      'user_id': req.body.user_id,
      // replace with token later
      // token.(key for user)
      'products_id': req.body.products_id
    })
    .returning('*')
    .then((newWish) => res.json(humps.camelizeKeys(newWish[0])))
})

router.delete('/', (req, res, next) => {
  knex('wishlist')
  .where('id', req.body.id)
  .del()
  .returning('*')
  .then((wishDeleted) => {
    res.json(wishDeleted[0]);
  })
})



module.exports = router;
