const addUserHandler = async (req, res) => {
    const {
      body
    } = req;
    const {
      locals: {
        userService
      },
    } = res;
  
    const createdUser = await userService.addAccount(body);
  
    res.send(createdUser);
};

module.exports = {
    addUserHandler
};