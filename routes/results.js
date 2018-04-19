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


router.get('/:cat', (req, res, next) => {
  knex('products')
    .where('category', req.params.cat)
    .then((results) => {
      let title = 'All Products'
      switch (req.params.cat) {
        case 'atq':
          title = 'Antiques';
          break;
        case 'bka':
          title = 'Books';
          break;
        case 'vgm':
          title = 'Video Games';
          break;
        case 'clt':
          title = 'Collectables';
          break;
        // default:
        //   'All Products'
      }

      res.render('results', {
        title: title,
        allProducts: results

      })
    })
    .catch((err) => {
      next(err)
    })
})


module.exports = router;
