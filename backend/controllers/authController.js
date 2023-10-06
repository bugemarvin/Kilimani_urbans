const passport = require('passport');
const User = require('../models/user');

// User registration controller
exports.registerUser = (req, res) => {
  const { username, password } = req.body;
  const newUser = new User({ username, password });

  newUser.save((err, user) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(200).json({ message: 'Registration successful' });
  });
};

// User login controller
exports.loginUser = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({ message: 'Authentication failed' });
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.status(200).json({ message: 'Login successful' });
    });
  })(req, res, next);
};
