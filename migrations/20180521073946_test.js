exports.up = function(knex, Promise) {
  return knex.schema.createTable('tests', function(table){
    table.increments('test_id');
    table.integer('board_id').notNullable();
    table.text('test_description').notNullable();
    table.string('name').notNullable();
    table.string('customer').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tests');
};
