const mongoose = require('mongoose');
const controller = require('./controllers/controler');

mongoose.connect('mongodb://localhost/nursery', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to db...'))
  .catch((err) => console.error('Can not connect', err));

const user = {
  name: 'Bill',
  email: 'user@mail.com',
  hasPet: true,
  pet: {
    name: 'Rex',
    type: 'dog',
    age: 5,
    owner: 'user',
  },
};

controller.createUser(user);
