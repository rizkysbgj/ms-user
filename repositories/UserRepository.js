class UserRepository {
  constructor(options) {
    Object.assign(this, options);
  }
  
  async saveUser(payload) {
    const createdUser = await this.db('users').insert({
      ...payload,
      createdAt: new Date(),
      modifiedAt: new Date()
    });

    return createdUser;
  }
}

module.exports = UserRepository;
