class OtpRepository {
  constructor(options) {
    Object.assign(this, options);
  }
  
  async initOtp(payload) {
    const dateNow = new Date();
    const expiredAt = new Date(dateNow.getTime() + 5 * 60000);

    const [otpId] = await this.db('otps')
      .insert({
        ...payload,
        expiredAt,
        createdAt: dateNow,
        modifiedAt: dateNow
      })
      .onConflict('email')
      .merge();

    return otpId;
  }

  async getOtpById(id) {
    const [otp] = await this.db('otps')
      .where({ id });

    return otp;
  }

  async getValidOtpByQuery(query) {
    const dateNow = new Date();
    const [otp] = await this.db('otps')
      .where(query)
      .andWhere('expiredAt', '>', dateNow);

    return otp;
  }
}

module.exports = OtpRepository;
