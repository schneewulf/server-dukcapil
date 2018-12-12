//@flow
import express from 'express';
require('dotenv').config();
import {Pool} from 'pg';
const app = express();
const port = 80;

const connectionString = `${process.env.DATABASE_URL || 'localhost'}`;

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/item/:nik', (req, res) => {
  const pool = new Pool({
    user: process.env.DATABASE_USER || 'root',
    host: connectionString,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
    port: '5432',
  });
  if (req.params && req.params.nik) {
    const queryText = `SELECT * FROM users WHERE nik = ${req.params.nik}`;
    pool
      .query(queryText)
      .then((dbRes) => {
        res.json(dbRes.rows[0]);
        pool.end();
      })
      .catch((err) => {
        console.log(err);
        pool.end();
      });
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
