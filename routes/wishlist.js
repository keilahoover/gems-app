'use strict';

const express = require('express');
const router = express.Router();
const humps = require('humps');
const knex = require('../knex');
const jwt = require('jsonwebtoken');

// const authorized = (req, res, next) => {
//   if (req.cookies.token) {
//     jwt.verify(req.cookies.token, process.env.JWT_KEY, err, payload) => {
//       if (err) next (err)
//       req.token = payload
//     })
//   } else {
//     next ({output: { statusCode: 401 }, message: 'Unauthorized'})
//   }
//   next()
// }

router.get('/', (req, res, next) => {
  // console.log(req.params);
  knex('wishlist')
  .join('products', 'wishlist.products_id', 'products.id')
  .select('*')
  .then((allItems) => {
    const camelized = allItems.map((entry) => humps.camelizeKeys(entry))
    res.json(camelized)
  })
  .catch((err) => console.log('err: ', err))
});


// wait until cards are generated?

// router.get('/check/:id', (req, res, next) => {
//   knex('wishlist')
//   .where('id', req.params.pid)
//   .join('products', 'wishlist.products_id', 'products.id')
//   .select('*')
//   .returning('*')
//   .then((result) => {
//     // console.log('result :', result);
//     if (result.length === 0) {
//       res.json(false)
//     } else if (req.query.products === result[0].products_id) {
//       s.json(true)
//     }
//   })
// })

router.post('/', (req, res, next) => {
  // const token = jwt.decode(req.cookies.token)
  console.log('REQ BODY', req.body)

  knex('wishlist')
    .insert({
      'user_id': req.body.userId,
      // replace with token later
      // token.(key for user)
      'products_id': req.body.productsId
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
