const userController = require('../controllers/userController');
const express = require('express');

// use Router to connect end point
const router = express.Router();

// route for sign up user
router.route('/signup').get(userController.signUp)

// route for login user
router.route('/login').get(userController.logIn)

// route for log out user
router.route('/logout').get(userController.logOut)

module.exports = router;