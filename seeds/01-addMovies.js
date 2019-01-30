const faker = require('faker');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies')
    .del()
    .then(function() {
      // Inserts seed entries
      return Promise.all([
        knex.raw('ALTER SEQUENCE movies_id_seq RESTART WITH 1'),

        knex('movies').insert([
          {
            title: faker.lorem.word(),
            description: faker.lorem.word(),
            year_released: faker.random.number({ min: 2000, max: 2019 }),
          },
          {
            title: faker.lorem.word(),
            description: faker.lorem.word(),
            year_released: faker.random.number({ min: 2000, max: 2019 }),
          },
          {
            title: faker.lorem.word(),
            description: faker.lorem.word(),
            year_released: faker.random.number({ min: 2000, max: 2019 }),
          },
          {
            title: faker.lorem.word(),
            description: faker.lorem.word(),
            year_released: faker.random.number({ min: 2000, max: 2019 }),
          },
          {
            title: faker.lorem.word(),
            description: faker.lorem.word(),
            year_released: faker.random.number({ min: 2000, max: 2019 }),
          },
          {
            title: faker.lorem.word(),
            description: faker.lorem.word(),
            year_released: faker.random.number({ min: 2000, max: 2019 }),
          },
          {
            title: faker.lorem.word(),
            description: faker.lorem.word(),
            year_released: faker.random.number({ min: 2000, max: 2019 }),
          },
          {
            title: faker.lorem.word(),
            description: faker.lorem.word(),
            year_released: faker.random.number({ min: 2000, max: 2019 }),
          },
          {
            title: faker.lorem.word(),
            description: faker.lorem.word(),
            year_released: faker.random.number({ min: 2000, max: 2019 }),
          },
          {
            title: faker.lorem.word(),
            description: faker.lorem.word(),
            year_released: faker.random.number({ min: 2000, max: 2019 }),
          },
        ]),
      ]);
    });
};
