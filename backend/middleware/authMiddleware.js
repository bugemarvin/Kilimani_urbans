// Middleware for checking user authentication
exports.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};

// Middleware for checking user roles (e.g., admin)
exports.isAdmin = (req, res, next) => {
  if (req.isAuthenticated() && req.user.isAdmin) {
    return next();
  } else {
    return res.status(403).json({ message: 'Forbidden' });
  }
};
