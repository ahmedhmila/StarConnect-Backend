// Path: config/env/production/database.js
const parse = require('pg-connection-string').parse;

module.exports = ({ env }) => {
  // We will set this variable in Azure Portal later
  const client = parse(env('DATABASE_URL'));

  return {
    connection: {
      client: 'postgres',
      connection: {
        host: client.host,
        port: client.port,
        database: client.database,
        user: client.user,
        password: client.password,
        ssl: { rejectUnauthorized: false },
      },
      debug: false,
    },
  };
};