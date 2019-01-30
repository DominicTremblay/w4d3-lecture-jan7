exports.up = function(knex, Promise) {
  return knex.schema.createTable('movies', table => {
    table
      .increments('id')
      .primary()
      .unsigned();
    table.string('title').notNullable();
    table.text('description');
    table.date('release_year');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('movies');
};
