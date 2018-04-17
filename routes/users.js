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
  res.send('this is where users sign up for an account');
});

/*POST adding an account */

router.post('/login' , (req,res,next) => {
  res.send('created an account!')
})

module.exports = router;
