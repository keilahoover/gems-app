
exports.seed = function(knex, Promise) {
  const craigslist = require('node-craigslist')
  const antiqueClient = new craigslist.Client({
      city : 'boulder'
  }),
  options = {
    baseHost : '', // defaults to craigslist.org
    category : 'ata', // defaults to sss (all)
    city : '',
    maxAsk : '200',
    minAsk : '100'
  };

  const bookClient = new craigslist.Client({
      city : 'boulder'
    }),
    bOptions = {
      baseHost : '', // defaults to craigslist.org
      category : 'bka', // defaults to sss (all)
      city : '',
      maxAsk : '200',
      minAsk : '100'
    };

  const gameClient = new craigslist.Client({
      city : 'boulder'
    }),
    gOptions = {
      baseHost : '', // defaults to craigslist.org
      category : 'vga', // defaults to sss (all)
      city : '',
      maxAsk : '200',
      minAsk : '100'
    };
    const collectClient = new craigslist.Client({
      city : 'boulder'
    }),
    cOptions = {
      baseHost : '', // defaults to craigslist.org
      category : 'cba', // defaults to sss (all)
      city : '',
      maxAsk : '200',
      minAsk : '100'
    };

  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      return Promise.all([
        antiqueClient
          .search(options, '')
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
          }),
          bookClient
            .search(bOptions, '')
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
            }),
            gameClient
              .search(gOptions, '')
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
              }),
              collectClient
                .search(cOptions, '')
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
      ])
        .then(function() {
          return knex.raw(`SELECT setval('products_id_seq', (SELECT MAX(id) FROM products));`)
        });
        // .catch((err) => console.log(err))
      //with those results, create rows, or records
    })
};
