const fs = require('fs');
const path = require('path');

// Define a log directory for errors
const errorLogDirectory = path.join(__dirname, '../logs/error');
if (!fs.existsSync(errorLogDirectory)) {
  fs.mkdirSync(errorLogDirectory, { recursive: true });
}

// Create or append to a CSV file to log errors
const errorLogCsvFile = path.join(errorLogDirectory, 'error_log.csv');
const errorLogStream = fs.createWriteStream(errorLogCsvFile, { flags: 'a' });

// Middleware function to log errors and format error responses
exports.errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  // Log the error with a timestamp to the CSV file
  const timestamp = new Date().toISOString();
  const errorMessage = err.message || 'Unknown error';
  const errorLogMessage = `${timestamp},${errorMessage}\n`;
  errorLogStream.write(errorLogMessage);

  // Handle specific errors with customized responses
  if (err.name === 'ValidationError') {
    const validationErrors = {};
    return res.status(400).json({ message: 'Validation error', errors: validationErrors });
  } else if (err.name === 'UnauthorizedError') {
    return res.status(401).json({ message: 'Unauthorized' });
  } else {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

exports.handle404ErrorMiddleware = (error, req, res, next) => {
  if (error.status === 404) {
    res.status(404).json({ message: 'Page not found' });
  } else {
    next(error);
  }
};
