const { Pool, Client } = require('pg');
//psql -h 3.15.240.140 -d games -U postgres

const connectionString = 'postgresql://postgres:agm12293@database.server.com:5432/sdc'
const pool = new Pool({
  connectionString,
});

const client = new Client({
  user: 'postgres',
  host: '52.53.234.253',
  database: 'games',
  password: 'root',
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