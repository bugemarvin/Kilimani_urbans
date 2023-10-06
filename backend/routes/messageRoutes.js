const express = require('express');
const router = express.Router();
const { sendMessage, getUserMessages } = require('../controllers/messagingController');
const { isAuthenticated } = require('../middleware/authMiddleware');

/**
 * @method POST, GET
 * @route /api_v1/messages
 * @description Send a message, get user's messages
 * @access Private
 */

router.post('/', isAuthenticated, sendMessage);
router.get('/:userId', isAuthenticated, getUserMessages);

module.exports = router;
