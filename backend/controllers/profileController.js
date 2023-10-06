const User = require('../models/user');

// Get user profile by username
exports.getUserProfile = (req, res) => {
  const { username } = req.params;
  User.findOne({ username }, (err, user) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).json(user);
  });
};

// Update user profile information
exports.updateUserProfile = (req, res) => {
  const { username } = req.params;
  const { name, email, bio } = req.body;

  User.findOneAndUpdate(
    { username },
    { $set: { name, email, bio } },
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
