// setup for knex
const config = require('./knexfile');
const env = 'development';
const knex = require('knex')(config[env]);

// running a query

const displayMovieList = movies => {
  for (const movieObj of movies) {
    console.log(
      `${movieObj.movieId} - title: ${movieObj.title} actor id: ${
        movieObj.actorId
      } first name: ${movieObj.first_name} last name: ${movieObj.last_name}`
    );
  }
};

knex
  .select(
    'movies.id as movieId',
    'actors.id as actorId',
    'title',
    'first_name',
    'last_name'
  )
  .from('movies')
  .innerJoin('movies_actors', 'movies.id', 'movies_actors.movie_id')
  .innerJoin('actors', 'movies_actors.actor_id', 'actors.id')
  .then(result => {
    displayMovieList(result);
  })
  .finally(() => {
    knex.destroy();
  });
