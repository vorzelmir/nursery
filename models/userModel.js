const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  pet: {
    type: String,
    ref: 'Pet',
  },
});
const User = mongoose.model('User', userSchema);
module.exports = {
  User,
};
