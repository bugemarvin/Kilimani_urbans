const User = require('../models/user');

// Update user account settings
exports.updateUserSettings = (req, res) => {
  const { userId } = req.params;
  const { notificationPreferences, privacySettings } = req.body;

  User.findByIdAndUpdate(
    userId,
    { $set: { notificationPreferences, privacySettings } },
    { new: true },
    (err, updatedUser) => {
      if (err) {
        return res.status(500).send(err);
      }
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      return res.status(200).json(updatedUser);
    }
  );
};
