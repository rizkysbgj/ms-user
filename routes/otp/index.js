const express = require('express');
const router = express.Router();
const { initOtpHandler, validateOtpHandler } = require('./handler')

router.post(
  '/otps/init', 
  initOtpHandler
);

router.post(
  '/otps/validate', 
  validateOtpHandler
);

module.exports = router;