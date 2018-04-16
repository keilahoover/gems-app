var express = require('express');
var router = express.Router();


var craigslist = require('node-craigslist'),
  client = new craigslist.Client({
    city : ''
  });

client
  .list()
  .then((listings) => {
    // play with listings here...
    listings.forEach((listing) => console.log(listing));
  })
  .catch((err) => {
    console.error(err);
  });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'GEMS' });
});

module.exports = router;
