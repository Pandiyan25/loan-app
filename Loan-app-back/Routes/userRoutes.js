const express = require('express');
const { registerUser, userDetails } = require('../controller/login/registerUser');
const router = express.Router();

router.route('/').post(registerUser);
router.route('/login').post(userDetails);

module.exports = router;
