const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
  petName: String,
  petType: String,
  petAge: Number,
  owner: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
  house: {
    type: mongoose.Types.ObjectId,
    ref: 'Nursery',
  },
});

module.exports = { PetSchema };
