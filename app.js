const express = require('express');
const mongoose = require('mongoose');
const controller = require('./controllers/controler');

mongoose.connect('mongodb://localhost/nursery', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to db...'))
  .catch((err) => console.error('Can not connect', err));

controller.createUser();
