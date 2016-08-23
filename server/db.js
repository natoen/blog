import bluebird from 'bluebird';
const pgp = require('pg-promise')({ promiseLib: bluebird });

const DATABASE_URL = process.env.DATABASE_URL || 'postgres://localhost:5432/blog';
const connection = pgp(DATABASE_URL);

module.exports = connection;
