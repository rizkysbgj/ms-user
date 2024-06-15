const express = require('express');
const router = express.Router();
const { createUserHandler } = require('./handler')

router.post(
  '/users', 
  createUserHandler
);

module.exports = router;