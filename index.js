require('dotenv').config();
const express = require('express');
const knex = require('knex');

const routes = require('./routes');

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

const UserRepository = require('./repositories/UserRepository')

const initRepo = (req, res, next) => {
  const db = knex({
    client: 'mysql2',
    connection: {
      host: config.database.host,
      user: config.database.user,
      password: config.database.password,
      database: config.database.name
    }
  });

  const userRepository = new UserRepository({ db });

  Object.assign(res.locals, {
    userRepository
  });

  next();
}

const UserService = require('./services/UserService');

const initService = (req, res, next) => {
  const { locals: { userRepository }} = res;
  const userService = new UserService({ userRepository });

  Object.assign(res.locals, {
    userService
  });

  next();
}


app.use(
  '/', 
  initRepo,
  initService,
  routes
);
