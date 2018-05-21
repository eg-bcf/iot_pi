exports.up = function(knex, Promise) {
  return knex.schema.createTable('liquids', function(table){
    table.increments('liquid_id');
    table.text('description').notNullable();
    table.string('customer').notNullable();
    table.string('name').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('liquids');
};
