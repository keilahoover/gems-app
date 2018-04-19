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
    .catch((err) => {
      next(err)
    })
})

// router.get('/:atq', (req, res, next) => {
//  knex('products')
//  .where('atq', req.params.atq )
//  .then((antProducts) => {
//    res.render('results', {
//      title: 'Antiques',
//      antProducts
//
//    })
//  })
//  .catch((err) => {
//    next(err)
//  })
// })


module.exports = router;
