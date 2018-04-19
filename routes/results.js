'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');
const humps = require('humps');
const KEY = process.env.JWT_KEY
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


router.get('/', (req, res, next) => {
  knex('products')
    .select('*')
    .then((allProducts) => {
      res.render('results', {
        title: 'All Products',
        allProducts
      })
    })
})

// router.get('/:atq', (req, res, next) => {
//   knex('products')
//   .where('id', req.params.id)
//   .then((specProducts) => {
//     res.render('results', {
//       title: 'Anitques'
//     })
//   })
// })


module.exports = router;
