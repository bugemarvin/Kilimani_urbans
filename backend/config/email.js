const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'YourEmailService', // e.g., 'Gmail'
  auth: {
    user: 'your.email@example.com',
    pass: 'your-email-password',
  }
});

module.exports = transporter;
