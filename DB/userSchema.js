const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, 'User must have a name'],
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'User must have an email'],
    unique: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8,
    select: false,
  },
  confirmPassword: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      validator(value) {
        return value === this.password;
      },
      message: 'Password is not valid',
    },
  },
  hasPet: Boolean,
  pet: {
    type: mongoose.Types.ObjectId,
    ref: 'Pet',
  },
});

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;
  next();
});

UserSchema.methods.correctPassword = async (candidatePassword, userPassword) => await bcrypt.compare(candidatePassword, userPassword);

module.exports = { UserSchema };
