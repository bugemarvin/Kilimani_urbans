const User = require('../models/user');
const Report = require('../models/report');

// Get admin dashboard
module.exports.getDashboard = (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  res.status(200).json({ message: 'Welcome to the admin dashboard' });
};

// Get user accounts for admin dashboard
module.exports.getUserAccounts = (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(200).json(users);
  });
};

// Get reported content for review
module.exports.getReportedContent = (req, res) => {
  Report.find({}, (err, reports) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(200).json(reports);
  });
};
