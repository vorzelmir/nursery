const mongoose = require('mongoose');

// create model depends on the choice of Schema
const petSchema = new mongoose.Schema({
  name: String,
  type: String,
  age: Number,
  owner: {
    type: String,
    ref: 'User',
  },
});

// or
// const petUserSchema = new mongoose.Schema({
//   name: String,
//   type: String,
//   age: Number,
//   owner: {
//     type: mongoose.Types.ObjectId,
//     master: user.userSchema,
//   },
// });
// or
// const petNurserySchema = new mongoose.Schema({
//   name: String,
//   type: String,
//   age: Number,
//   owner: {
//     type: mongoose.Types.ObjectId,
//     master: nursery.nurserySchema,
//   },
// });
const Pet = mongoose.model('Pet', petSchema);

module.exports = {
  Pet,
};
