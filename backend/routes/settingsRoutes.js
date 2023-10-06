const express = require('express');
const router = express.Router();
const settingsController = require('../controllers/settingsController');
const { isAuthenticated } = require('../middleware/authMiddleware');

/**
 * @method PUT
 * @route PUT api/settings/update
 * @description Create a new settings entry
 * @access Private
 */

router.put('/update', isAuthenticated, settingsController.updateUserSettings);

module.exports = router;
