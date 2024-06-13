const express = require('express');
const router = express.Router();
const { addUserHandler } = require('./handler')

router.post(
  '/users', 
  addUserHandler
);

module.exports = router;