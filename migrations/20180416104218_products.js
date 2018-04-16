exports.up = function(knex, Promise) {
  return knex.schema.createTable('products', function(table){
    table.increments();
    table.integer('pid').notNull();
    table.boolean('hasPic').notNull();
    table.specificType('price', 'char(20)').notNull();
    table.text('title', 255).notNull().defaultTo('No Title');
    table.varchar('url', 255).notNull().defaultTo('');
    table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'));
    table.dateTime('updated_at').notNullable().defaultTo(knex.raw('now()'));
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('products');
};
