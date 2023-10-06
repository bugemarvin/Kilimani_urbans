const passport = require('passport');
const User = require('../models/user');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

// User registration controller
exports.registerUser = async (req, res) => {
  const { email, username, password, phone, tokens } = req.body;
  try {
    const newUser = new User({ email, username, password, phone, tokens });
    const user = await newUser.save();

    // Set user ID indicating that the user is logged in
    req.session.userId = user._id;

    // Generate a secure random secret of a specified length (e.g., 32 characters)
    const generateSecureSecret = (length) => {
      return crypto.randomBytes(length).toString('hex');
    };

    // Generate a secure secret for your user session
    const sessionSecret = generateSecureSecret(32);
    // Generate a secret key that expires in 1 hour (3600 seconds)
    const secretKey = jwt.sign({}, sessionSecret, { expiresIn: '24h' });

    // Set the secret key in the user session
    req.session.secretKey = user.tokens[0].token;
    console.log(secretKey);

    return res.status(200).json({ message: 'Registration successful' });
  } catch (err) {
    return res.status(500).json({ message: 'Registration failed', error: err.message });
  }
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

    // Set user ID indicating that the user is logged in
    req.session.userId = user._id;

    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.status(200).json({ message: 'Login successful' });
    });
  })(req, res, next);
};

// User logout controller
exports.logoutUser = (req, res) => {
  req.logout();
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: 'Logout failed' });
    }
    res.status(200).json({ message: 'Logout successful' });
  });
};

// Get user dashboard controller
exports.getUserDashboard = (req, res) => {
  res.status(200).json({ message: 'Welcome to the user dashboard' });
};
