const createError = require('http-errors')
const validator = require('validator');

class UserService {
  constructor(options) {
    Object.assign(this, options);
  }

  _validatePhoneNumber(phoneNumber) {
    return validator.isNumeric(phoneNumber);
  }

  _validateEmail(email) {
    return validator.isEmail(email);
  }

  async addAccount(payload) {
    const { email, phoneNumber } = payload;

    try {
      const isValidEmail = this._validateEmail(email);
      const isValidPhoneNumber = this._validatePhoneNumber(phoneNumber);

      if (!isValidEmail || !isValidPhoneNumber) {
        throw createError(400, 'Email or phone number format is invalid', { code: 'INVALID_FORMAT' });
      }

      const id = await this.userRepository.saveUser(payload);

      const createdUser = await this.userRepository.getUserById(id);

      return createdUser;
    } catch (error) {
      console.log(error, 'failed to save user');
  
      throw error;
    }
  }
}

module.exports = UserService;
