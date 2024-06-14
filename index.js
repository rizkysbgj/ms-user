require('dotenv').config();
const express = require('express');
const knex = require('knex');

const routes = require('./routes');
const { services, repositories, errorHandlers } = require('./middlewares')

const config = {
  database: {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    name: process.env.DATABASE_NAME
  }
}

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`)
});

app.use(
  '/', 
  repositories,
  services,
  routes,
  errorHandlers
);
