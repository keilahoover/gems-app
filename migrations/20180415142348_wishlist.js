exports.up = function(knex, Promise) {
  return knex.schema.createTable('wishlist', function(table){
    table.increments()
    table.integer('user_id').notNull().references('users.id').onDelete('CASCADE')
    // table.____('pid').notNull
    table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'))
    table.dateTime('updated_at').notNullable().defaultTo(knex.raw('now()'))
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('wishlist')
};
