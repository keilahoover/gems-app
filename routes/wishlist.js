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

  // console.log(req.params);
  knex('wishlist')
  .join('products', 'wishlist.products_id', 'products.id')
  .select('*')
  .then((allItems) => {
    res.render('wishlist', {title: 'Wishlist'})
    allItems
    // const camelized = allItems.map((entry) => humps.camelizeKeys(entry))
    // res.json(camelized)
  })
  .catch((err) => console.log('err: ', err))
});

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
