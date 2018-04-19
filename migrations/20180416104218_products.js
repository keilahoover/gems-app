exports.up = function(knex, Promise) {
  return knex.schema.createTable('products', function(table){
    table.increments();
    table.bigInteger('pid').notNull();
    table.text('image');
    table.specificType('price', 'char(20)').notNull();
    table.text('title').notNull().defaultTo('No Title');
    table.varchar('url', 255).notNull().defaultTo('');
    table.varchar('category', 5).notNull().defaultTo('');
    table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'));
    table.dateTime('updated_at').notNullable().defaultTo(knex.raw('now()'));
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('products');
};
