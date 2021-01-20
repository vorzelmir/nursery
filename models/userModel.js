const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'User must have a name'],
    unique: true,
  },
  address: String,
  email: String,
  phoneNumber: Number,
});

const User = mongoose.model('User', userSchema);
module.exports = User;
