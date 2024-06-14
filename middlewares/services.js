const { UserService, OtpService } = require('../services');

const services = (req, res, next) => {
  const { locals: { userRepository, otpRepository }} = res;

  const userService = new UserService({ userRepository });

  const otpService = new OtpService({ otpRepository });

  Object.assign(res.locals, {
    userService,
    otpService
  });

  next();
}

module.exports = [services];
