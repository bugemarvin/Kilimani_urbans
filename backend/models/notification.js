const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  notification: {
    type: Object,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});

const notifications = mongoose.model('Notification', notificationSchema);

module.exports = notifications;
