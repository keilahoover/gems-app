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
