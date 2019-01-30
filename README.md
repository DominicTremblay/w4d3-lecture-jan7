# w4d2-breakout

w4d2 breakout about knex at Lighthouse Labs

Today's Objectives:

1.  What is knex
    - Why use knex
    - Installing knex
2.  Migrations
    - Why use migrations
    - Creating migration
3.  Seeding
    - Why use seed files
    - Creating seed files
4.  Executing Queries

#1. What is knex

- Knex is a query builder for Node that makes our life easier with object oriented syntax

## Why knex

- Abstract the different implementations of SQL from MSSQL, MySQL, PostgreSQL, SQLite3, and Oracle.
- knex handles the sanitization of user input at the library level to prevent SQL injection.
- Provides migrations for updating our database schema.

## Installing Knex

To install knex in your project directory:

    npm i --save knex

You might want to also install knex globally to use the knex CLI:

    npm i -g knex

Make sure Postgress is also installed:

    npm i --save pg

    ### Create the knexfile

The knexfile contains the database config. To create the knexfile in your project directory:

    knex init

Edit knexfile.js and add the database credentials.

Note: add the knexfile.js to the .gitignore file

### Add knex config to your server

    const config    = require('./knexfile');
    const env       = 'development';
    const knex      = require('knex')(config[env]);

#2. Migrations

## Why use migrations

- It is used for version control of the database much like git is used for tracking changes in the code.
- Migrations give the history of all changes made to the database schema.
- Migrations are pushed to github so everyone is working with the same database schema.

Note:

- Don't modify a migration that's already pushed. Other developpers won't have the same changes.
- Create a new migration instead.

## Creating migrations

    knex migrate:make migration_name

A new migration is added to the migrations folder.

**In Postgress, a folder named "knex_migrations" is also created**

### Structure of a migration file

A migration has 2 parts:

- up: modify the database schema
- down: rollback the changes made to the database schema

For example, a create table as the up should have a corresponding drop table as the down:

```javascript
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table
      .increments('id')
      .primary()
      .unsigned();
    table.string('first_name');
    table.string('last_name');
    table.string('email');
    table.timestamps(true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
```

Look up the Schema Builder in the documentation:
(http://knexjs.org/#Schema)[http://knexjs.org/#Schema]

### Migrations with multiple promises

- create multiple tables in 1 migration file with Promise.all

```
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("posts", table => {
    ...
    }),
    knex.schema.createTable("comments", table => {
    ...
    }),
    knex.schema.createTable("likes", table => {
    ...
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('likes'),
    knex.schema.dropTable('comments'),
    knex.schema.dropTable('posts'),
  ])
};
```

### Adding a foreign keys

1. create the property
2. add a foreign key on it

   return knex.schema.table("game_details", table => {
   table.integer("game_id");
   table
   .foreign("game_id")
   .references("id")
   .on("games")
   .onDelete("cascade");
   });

#3. Seeding

## Why use seeds

- In development, you need some data to work with.
- For obvious reasons, the database can not be pushed to github. Each member of the team will work with its own local database. However, each individual still need to work with the same database content.
- The database can be repopulated on demand

To create a seed file:

    knex seed:make name_of_seed_file

Notes:

- You can use Faker to create fake data
- Seed files are executed in alphabetical order
- Execute seed files of tables representing the one side of the relationship first
- Execute seed files of tables with foreign keys second
- use knex.raw("ALTER SEQUENCE tablename_id_seq RESTART WITH 1")

#.Executing Queries

Look at the documentation about building queries:
(http://knexjs.org/#Builder)[http://knexjs.org/#Builder]

- You can execute knex queries as callbacks or promises
- Using promises is more straightforward

```javascript
knex
  .select(
    'movies.id as movieId',
    'movies.title',
    'actors.id as actorId',
    'actors.first_name',
    'actors.last_name'
  )
  .from('movies')
  .innerJoin('movies_actors', 'movies.id', 'movies_actors.movie_id')
  .innerJoin('actors', 'movies_actors.actor_id', 'actors.id')
  .then(result => {
    console.log(result);
  })
  .finally(() => {
    knex.destroy();
  });
```

Notes:

- The results you get is an array of objects that you need to iterate over
- An alias need to be use for column names that are the same in multiple tables
