const faker = require('faker');
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actors')
    .del()
    .then(function() {
      // Inserts seed entries
      return Promise.all([
        knex.raw('ALTER SEQUENCE actors_id_seq RESTART WITH 1'),
        knex('actors').insert([
          {
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            date_of_birth: faker.date.past(),
          },
          {
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            date_of_birth: faker.date.past(),
          },
          {
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            date_of_birth: faker.date.past(),
          },
          {
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            date_of_birth: faker.date.past(),
          },
          {
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            date_of_birth: faker.date.past(),
          },
          {
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            date_of_birth: faker.date.past(),
          },
          {
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            date_of_birth: faker.date.past(),
          },
          {
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            date_of_birth: faker.date.past(),
          },
          {
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            date_of_birth: faker.date.past(),
          },
          {
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            date_of_birth: faker.date.past(),
          },
        ]),
      ]);
    });
};
