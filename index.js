// setup for knex
const config = require('./knexfile');
const env = 'development';
const knex = require('knex')(config[env]);
