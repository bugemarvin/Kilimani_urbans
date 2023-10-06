const Message = require('../models/message');

// Send a message
exports.sendMessage = (req, res) => {
  const { senderId, recipientId, messageText } = req.body;
  const newMessage = new Message({ senderId, recipientId, messageText });

  newMessage.save((err, message) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(201).json(message);
  });
};

// Get user's messages
exports.getUserMessages = (req, res) => {
  const { userId } = req.params;
  Message.find({ $or: [{ senderId: userId }, { recipientId: userId }] }, (err, messages) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(200).json(messages);
  });
};
