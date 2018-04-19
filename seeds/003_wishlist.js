
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('wishlist').del()
    .then(function () {
      // Inserts seed entries
      return knex('wishlist').insert([{
        id: 1,
        user_id: 1,
        products_id: 1
      }])
    })
    .then(function() {
<<<<<<< HEAD

=======
>>>>>>> db61035c50ccbe68dc2f325ac079a690976d340c
      return knex.raw(`SELECT setval('wishlist_id_seq', (SELECT MAX(id) FROM wishlist));`)
    });
};
