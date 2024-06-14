const initOtpHandler = async (req, res) => {
  const {
    body
  } = req;
  const {
    locals: {
      otpService
    },
  } = res;

  const otp = await otpService.initOtp(body);

  res.send(otp);
};

const validateOtpHandler = async (req, res, next) => {
  const {
    body
  } = req;
  const {
    locals: {
      otpService
    },
  } = res;

  try {
    const result = await otpService.validateOtp(body);
  
    res.send(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
    initOtpHandler,
    validateOtpHandler
};