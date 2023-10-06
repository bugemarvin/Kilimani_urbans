const express = require('express');
const router = express.Router();
const passport = require('passport');
const authController = require('../controllers/authController');
const { isAuthenticated } = require('../middleware/authMiddleware');

// Routes
router.post('/register', authController.registerUser);
router.post('/login', passport.authenticate('local'), authController.loginUser);
router.get('/logout', isAuthenticated, authController.logoutUser);
router.get('/dashboard', isAuthenticated, authController.getUserDashboard);

module.exports = router;
