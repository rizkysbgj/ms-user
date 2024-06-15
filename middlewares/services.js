const { UserService } = require('../services');

const services = (req, res, next) => {
  const { locals: { userRepository, otpRepository }} = res;

  const userService = new UserService({ userRepository });

  Object.assign(res.locals, {
    userService
  });

  next();
}

module.exports = [services];
