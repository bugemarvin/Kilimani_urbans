const Notification = require('../models/notification');

// Get user notifications
exports.getUserNotifications = (req, res) => {
  const { userId } = req.params;
  Notification.find({ userId }, (err, notifications) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(200).json(notifications);
  });
};

// Mark notifications as read
exports.markNotificationsAsRead = (req, res) => {
  const { userId } = req.params;
  Notification.updateMany({ userId, isRead: false }, { isRead: true }, (err) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(200).json({ message: 'Notifications marked as read' });
  });
};
