const { UserRepository, OtpRepository } = require('../repositories')

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

  const userRepository = new UserRepository({ db });

  const otpRepository = new OtpRepository({ db });

  Object.assign(res.locals, {
    userRepository,
    otpRepository
  });

  next();
}

module.exports = [repositories];
