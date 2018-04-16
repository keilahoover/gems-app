
exports.seed = function(knex, Promise) {
  const craigslist = require('node-craigslist'),
    client = new craigslist.Client({
      city : 'boulder'
    });
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      return client
        .list()
        .then((result) => {
            return knex('products').insert(
              result.map((listing) => ({
                pid: listing.pid,
                hasPic: listing.hasPic,
                price: listing.price,
                title: listing.title,
                url: listing.url
            })
          )
          )
        })
        .then(function() {
          return knex.raw(`SELECT setval('products_id_seq', (SELECT MAX(id) FROM products));`)
        });
        // .catch((err) => console.log(err))
      //with those results, create rows, or records
    })
};
