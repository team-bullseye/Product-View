const { Pool, Client } = require('pg');

const connectionString = 'postgresql://postgres:agm12293@database.server.com:5432/sdc'
const pool = new Pool({
  connectionString,
});

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'sdcgames',
  password: 'agm12293',
  port: 5432
})

client.connect((err, session) => {
  if(err) {
    console.log('err', err);
  } else {
    console.log('Connected at port: 5432');
  }
})

module.exports = client;