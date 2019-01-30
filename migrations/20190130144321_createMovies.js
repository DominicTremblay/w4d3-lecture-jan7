exports.up = function(knex, Promise) {
  return knex.schema.createTable('movies', table => {
    table
      .increments('id')
      .primary()
      .unsigned();

    table.string('title');
    table.text('description');
    table.integer('year_released');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('movies');
};
