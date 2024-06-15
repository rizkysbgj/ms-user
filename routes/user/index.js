const express = require('express');
const router = express.Router();
const { createUserHandler, getUserByUserIdHandler } = require('./handler')

router.post(
  '/users', 
  createUserHandler
);

router.get(
  '/users/:userId', 
  getUserByUserIdHandler
);

module.exports = router;