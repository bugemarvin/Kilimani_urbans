const fs = require('fs');
const path = require('path');

class LoggingMiddleware {
  constructor() {
    // Define a log directory
    this.logDir = path.join(__dirname, '../logs');
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir);
    }
  }

  // Create a writable stream to log requests and responses
  accessLogStream(location) {
    return fs.createWriteStream(path.join(this.logDir, location, 'access.log'), { flags: 'a' });
  }

  // Middleware function to log requests and responses
  logRequests() {
    return (req, res, next) => {
      const logMessage = `${new Date().toISOString()} - ${req.method} ${req.originalUrl}\n`;
      const stream = this.accessLogStream(req.baseUrl || '/');
      stream.write(logMessage);
      next();
    };
  }
}

module.exports = LoggingMiddleware;
