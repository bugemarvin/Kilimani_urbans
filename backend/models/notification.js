const mongose = require('mongoose');

const notificationSchema = new mongose.Schema({
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

const notifications = mongose.model('Notification', notificationSchema);

module.exports = notifications;
