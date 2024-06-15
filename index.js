require('dotenv').config();
const express = require('express');

const routes = require('./routes');
const { services, repositories, errorHandlers } = require('./middlewares')
const PORT = 3002;

const app = express();

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`)
});

app.use(
  '/', 
  repositories,
  services,
  routes,
  errorHandlers
);
