exports.up = function(knex, Promise) {
  return knex.schema.createTable('movies_actors', table => {
    table
      .increments('id')
      .primary()
      .unsigned();
    table.integer('movie_id');
    table.integer('actor_id');
    table
      .foreign('movie_id')
      .references('id')
      .on('movies');
    table
      .foreign('actor_id')
      .references('id')
      .on('actors');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('movies_actors');
};
