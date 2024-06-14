const addUserHandler = async (req, res, next) => {
    const {
      body
    } = req;
    const {
      locals: {
        userService
      },
    } = res;
  
    try {
      const createdUser = await userService.addAccount(body);
    
      res.send(createdUser);
    } catch (error) {
      next(error);
    }
};

module.exports = {
    addUserHandler
};