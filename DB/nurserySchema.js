const mongoose = require('mongoose');

const PropertySchema = mongoose.Schema({
  property: {
    type: String,
    enum: ['nursery', 'user'],
    default: 'nursery',
  },
});

const NurserySchema = mongoose.Schema({
  name: String,
  property: { PropertySchema },
});

module.exports = { NurserySchema };
