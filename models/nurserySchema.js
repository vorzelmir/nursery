const mongoose = require('mongoose');

const nurserySchema = new mongoose.Schema({
  name: String,
});

const Nursery = mongoose.model('Nursery', nurserySchema);

module.exports = Nursery;
