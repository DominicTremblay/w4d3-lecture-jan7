const faker = require('faker');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('movies').insert([
        {
          title: faker.lorem.word,
          description: faker.lorem.word,
          year_released: 2019,
        },
      ]);
    });
};
