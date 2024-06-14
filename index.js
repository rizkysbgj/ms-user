require('dotenv').config();
const express = require('express');

const routes = require('./routes');
const { services, repositories, errorHandlers } = require('./middlewares')

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
