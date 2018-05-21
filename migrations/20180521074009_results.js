exports.up = function(knex, Promise) {
  return knex.schema.createTable('results', function(table){
    table.increments();
    table.integer('liquid_id').notNullable().references("liquids.liquid_id");
    table.integer('test_id').notNullable().references("tests.test_id");
    table.float('value').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('results');
};
