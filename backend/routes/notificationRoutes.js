const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');
const { isAuthenticated } = require('../middleware/authMiddleware');

/**
 * @method GET, PUT
 * @route /api/notifications/:userId
 * @description Get user notifications
 * @access Private
 */

router.get('/notifications/:userId', isAuthenticated, notificationController.getUserNotifications);
router.put('/notifications/:userId', isAuthenticated, notificationController.markNotificationsAsRead);

module.exports = router;
