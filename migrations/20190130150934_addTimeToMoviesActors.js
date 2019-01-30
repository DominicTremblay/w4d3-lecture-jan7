exports.up = function(knex, Promise) {
  return knex.schema.table('movies_actors', table => {
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('movies_actors', table => {
    table.dropColumn('created_at');
    table.dropColumn('updated_at');
  });
};
