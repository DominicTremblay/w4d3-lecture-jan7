exports.up = function(knex, Promise) {
  return knex.schema.createTable('actors', table => {
    table
      .increments('id')
      .primary()
      .unsigned();
    table.string('first_name');
    table.string('last_name');
    table.date('date_of_birth');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('actors');
};
