const craigslist = new require('node-craigslist')
const options = {
    city: 'boulder',
    category: 'ata', // defaults to sss (all)
    hasPic: true,
    minAsk: '2000'
}


// client
//   .list()
//   .then((listings) => {
//     client.details(listings[0])
//   })
//   .then((details) => {
//     console.log(details);
//   })
//   .catch((err) => {
//     console.error(err);
//   });


new craigslist.Client()
  .search(options, '')
  .then((listings) => {

    for (var i = 0; i < listings.length; i++) {
      // for each listing query details
      new craigslist.Client()
      .details(listings[i])
      .then((detail) => {
        console.log('detail', detail.images);
      })
      .then((finalResults) => {
        console.log('finalResults', finalResults);
      })
    }



    // // map over the listings, for each listing fetch details
    // return listings.map((listing) => {
    //   // fetch images array for the listing
    //   let img =
    //   new craigslist.Client()
    //   .details(listing)
    //   .then((detail) => {
    //     let detailimg = detail.images[0]
    //     console.log('detailimg', detailimg)
    //     return detailimg
    //   })
    //
    //
    //
    //   // let imgs = new craigslist.Client().details(listing)
    //   console.log('img', img)
    //   // make a new key on the listing, for those images
    //   // listing.images = imgs
    //   // return the modified listing
    //   return listing
    // })

    // return client.details(listings[0])
  })
  .then((finalResults) => {

    // console.log('finalResults', finalResults);

    // return knex('products').insert(
    //   finalResults.map((listing) => {
    //     pid: listing.pid,
    //     image: listing.image,
    //     price: listing.price,
    //     title: listing.title,
    //     url: listing.url
    //   })
    // )
  })
  .catch((err) => {
    console.error(err);
  });
