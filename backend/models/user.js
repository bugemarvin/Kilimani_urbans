const { mongoose } = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    firstName: String,
    lastName: String
  },
  email: {
    type: String,
    required: true,
    unique: true
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
