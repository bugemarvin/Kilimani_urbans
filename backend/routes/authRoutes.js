const express = require('express');
const router = express.Router();
const passport = require('passport');
const authController = require('../controllers/authController');

// Routes
router.post('/register', authController.registerUser);
router.post('/login', passport.authenticate('local'), authController.loginUser);

module.exports = router;
