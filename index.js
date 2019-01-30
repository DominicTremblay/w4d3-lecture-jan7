// knex config
const config = require('./knexfile');
const env = 'development';
const knex = require('knex')(config[env]);
// Run knex queries

// knex
//   .select('first_name', 'last_name', 'date_of_birth')
//   .from('actors')
//   .then(result => {
//     console.log('results...');
//     console.log(result);
//   })
//   .catch(err => {
//     console.log(err);
//     return Promise.resolve();
//   })
//   .finally(() => {
//     console.log('kill connection');
//     knex.destroy();
//   });

knex
  .select('first_name', 'last_name', 'date_of_birth', 'title', 'release_year')
  .from('actors')
  .innerJoin('movies_actors', 'actors.id', 'movies_actors.actor_id')
  .innerJoin('movies', 'movies_actors.movie_id', 'movies.id')
  .then(result => {
    console.log('results...');
    console.log(result);
  })
  .catch(err => {
    console.log(err);
    return Promise.resolve();
  })
  .finally(() => {
    console.log('kill connection');
    knex.destroy();
  });
