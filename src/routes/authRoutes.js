const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();
const loginSchema = require('../joi/loginSchema');

router.route('/login').post(loginSchema.validate, authController.login);

module.exports = router;
