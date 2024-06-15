const knex = require('knex');

const { UserRepository } = require('../repositories')
const config = require('../config');

const repositories = (req, res, next) => {
  const db = knex({
    client: 'mysql2',
    connection: {
      host: config.database.host,
      user: config.database.user,
      password: config.database.password,
      database: config.database.name
    }
  });

  const userRepository = new UserRepository({ db, config });

  Object.assign(res.locals, {
    userRepository
  });

  next();
}

module.exports = [repositories];
