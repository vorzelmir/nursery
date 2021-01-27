const mongoose = require('mongoose');

const NurserySchema = new mongoose.Schema({
  head: {
    type: String,
    unique: true,
  },
  user: {
    type: String,
    ref: 'User',
  },
  pet: {
    type: String,
    ref: 'Pet',
  },
});

module.exports = { NurserySchema };
