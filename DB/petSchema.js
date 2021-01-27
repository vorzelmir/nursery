const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
  petName: {
    type: String,
    required: [true, 'Pet must have a name'],
    unique: true,
  },
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
