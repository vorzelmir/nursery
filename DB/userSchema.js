const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, 'User must have a name'],
    unique: true,
  },
  email: String,
  hasPet: Boolean,

  pet: {
    type: mongoose.Types.ObjectId,
    ref: 'Pet',
  },
});
module.exports = { UserSchema };
