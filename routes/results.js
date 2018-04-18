//most recent version

'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');
const humps = require('humps');
const KEY = process.env.JWT_KEY
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


// /* GET to sign up/login page */
// router.get('/users', (req, res, next) => {
//   res.send('this is where users sign up for an account!!');
// });

module.exports = router;
