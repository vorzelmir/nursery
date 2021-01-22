const mongoose = require('mongoose');
const { NurserySchema } = require('./nurserySchema');
const { UserSchema } = require('./userSchema');
const { PetSchema } = require('./petSchema');

const Nursery = mongoose.model('Nursery', NurserySchema);
const Pet = mongoose.model('Pet', PetSchema);
const User = mongoose.model('User', UserSchema);

module.exports = {
  Nursery,
  Pet,
  User,
};
