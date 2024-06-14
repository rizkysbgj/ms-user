const createError = require('http-errors')
const validator = require('validator');

class OtpService {
  constructor(options) {
    Object.assign(this, options);
  }

  _validateEmail(email) {
    return validator.isEmail(email);
  }

  async initOtp(payload) {
    const { email } = payload;

    try {
      const isValidEmail = this._validateEmail(email);

      if (!isValidEmail) {
        throw createError(400, 'Email format is invalid', { code: 'INVALID_FORMAT' });
      }

      const generatedOtp = Math.floor(Math.random() * 1000000);

      const otpPayload = {
        ...payload,
        otp: generatedOtp
      }
      const otpId = await this.otpRepository.initOtp(otpPayload);

      const otp = await this.otpRepository.getOtpById(otpId);

      return otp;
    } catch (error) {
      console.log(error, 'failed to init Otp');
  
      throw error;
    }
  }

  async validateOtp(payload) {
    try {
      const otp = await this.otpRepository.getValidOtpByQuery(payload);

      if (!otp) {
        throw createError(400, 'Invalid OTP', { code: 'INVALID_OTP' });
      }

      return { success: true };
    } catch (error) {
      console.log(error, 'failed to validate Otp');

      throw error;
    }
  }
}

module.exports = OtpService;
