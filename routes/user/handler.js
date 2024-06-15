const createUserHandler = async (req, res, next) => {
  const {
    body
  } = req;
  const {
    locals: {
      userService
    },
  } = res;

  try {
    const createdUser = await userService.createUser(body);
  
    res.send(createdUser);
  } catch (error) {
    next(error);
  }
};

const getUserByUserIdHandler = async (req, res, next) => {
  const {
    params: {
      userId
    }
  } = req;
  const {
    locals: {
      userService
    },
  } = res;

  try {
    const createdUser = await userService.getUserByUserId(userId);
  
    res.send(createdUser);
  } catch (error) {
    next(error);
  }
};

module.exports = {
    createUserHandler,
    getUserByUserIdHandler
};