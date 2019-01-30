const faker = require('faker');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies_actors')
    .del()
    .then(function() {
      // Inserts seed entries
      return Promise.all([
        knex.raw('ALTER SEQUENCE movies_actors_id_seq RESTART WITH 1'),
        knex('movies_actors').insert([
          {
            movie_id: faker.random.number({ min: 1, max: 10 }),
            actor_id: faker.random.number({ min: 1, max: 10 }),
          },
          {
            movie_id: faker.random.number({ min: 1, max: 10 }),
            actor_id: faker.random.number({ min: 1, max: 10 }),
          },
          {
            movie_id: faker.random.number({ min: 1, max: 10 }),
            actor_id: faker.random.number({ min: 1, max: 10 }),
          },
          {
            movie_id: faker.random.number({ min: 1, max: 10 }),
            actor_id: faker.random.number({ min: 1, max: 10 }),
          },
          {
            movie_id: faker.random.number({ min: 1, max: 10 }),
            actor_id: faker.random.number({ min: 1, max: 10 }),
          },
          {
            movie_id: faker.random.number({ min: 1, max: 10 }),
            actor_id: faker.random.number({ min: 1, max: 10 }),
          },
          {
            movie_id: faker.random.number({ min: 1, max: 10 }),
            actor_id: faker.random.number({ min: 1, max: 10 }),
          },
          {
            movie_id: faker.random.number({ min: 1, max: 10 }),
            actor_id: faker.random.number({ min: 1, max: 10 }),
          },
          {
            movie_id: faker.random.number({ min: 1, max: 10 }),
            actor_id: faker.random.number({ min: 1, max: 10 }),
          },
          {
            movie_id: faker.random.number({ min: 1, max: 10 }),
            actor_id: faker.random.number({ min: 1, max: 10 }),
          },
        ]),
      ]);
    });
};
