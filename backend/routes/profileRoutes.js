const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');
const { isAuthenticated } = require('../middleware/authMiddleware');

/**
 * @method GET
 * @route GET api/profile/:username
 * @description Get user profile by username
 * @access Public
 */

router.get('/:username', isAuthenticated, profileController.getUserProfile);
router.put('/:username', isAuthenticated, profileController.updateUserProfile);

module.exports = router;
