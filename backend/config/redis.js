const session = require('express-session');
const Redis = require('ioredis');
const redis = new Redis();
const crypto = require('crypto');

// Generate a secure random secret of a specified length (e.g., 32 characters)
const generateSecureSecret = (length) => {
  return crypto.randomBytes(length).toString('hex');
};

// Generate a secure secret for your Express session
const sessionSecret = generateSecureSecret(32);

const configureRedis = (app) => {
  app.use(
    session({
      store: new (require('connect-redis')(session))({
        client: redis
      }),
      secret: sessionSecret,
      saveUninitialized: false,
      resave: false,
      maxAge: 1000 * 30 * 60 // 30 minutes
    })
  );
};

module.exports.configureRedis = configureRedis;
