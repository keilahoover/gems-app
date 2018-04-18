'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');
const humps = require('humps');
const KEY = process.env.JWT_KEY
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


router.get('/', (req, res, next) => {
  // res.send('All Products')
  knex('products')
    .select('*')
    .then((allProducts) => {
      res.render('results', {
        title: 'All Products',
        allProducts
      })
    })
})

router.get('/:cat', (req, res, next) => {

})


module.exports = router;
