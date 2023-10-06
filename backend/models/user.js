const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    firstName: String,
    lastName: String
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: Number,
    default: ''
  },
  password: {
    type: String,
    required: true
  },
  profilePicture: String,
  dateOfBirth: Date,
  roles: {
    type: [String],
    enum: ['user', 'admin', 'moderator'],
    default: ['user']
  },
  tokens: [{
    token: String
  }],
  lastLoginAt: Date,
  status: {
    type: String,
    enum: ['active', 'suspended', 'banned'],
    default: 'active'
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
