exports.up = function(knex, Promise) {
  return knex.schema.createTable('actors', table => {
    table.increments('id').unsigned;
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.date('date_of_birth').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('actors');
};
