const mongoose = require('mongoose');

const nurserySchema = new mongoose.Schema({
  pet: {
    name: String,
    property: {
      type: String,
      enum: ['nursery', 'user'],
      default: 'nursery',
    },
  },
});

const Nursery = mongoose.model('Nursery', nurserySchema);

module.exports = {
  Nursery,
};
