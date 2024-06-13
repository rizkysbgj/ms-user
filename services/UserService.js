class UserService {
  constructor(options) {
    Object.assign(this, options);
  }

  async addAccount(payload) {
    try {
      const createdUser = await this.userRepository.saveUser(payload);

      return createdUser;
    } catch (error) {
      console.log(error, 'failed to save user');
  
      throw error;
    }
  }
}

module.exports = UserService;
