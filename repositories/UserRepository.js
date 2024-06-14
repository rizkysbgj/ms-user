class UserRepository {
  constructor(options) {
    Object.assign(this, options);
  }
  
  async saveUser(payload) {
    const [id] = await this.db('users').insert({
      ...payload,
      createdAt: new Date(),
      modifiedAt: new Date()
    });

    return id;
  }

  async getUserById(id) {
    const [user] = await this.db('users')
      .where({ id });

    return user;
  }
}

module.exports = UserRepository;
