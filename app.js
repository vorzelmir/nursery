const mongoose = require('mongoose');
const userController = require('./controllers/v1/userController');
const petController = require('./controllers/v1/petController');
const nurseryController = require('./controllers/v1/nurseryController');

mongoose
  .connect('mongodb://localhost/nursery', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to db...'))
  .catch((err) => console.error('Can not connect', err));

petController.createPet('Rex', 'dog', 5, '600b3bf070e95249f86f5fad');
userController.createUser(
  'Bill',
  'user@mail.com',
  true,
  '600b35a6a98172469f68b957',
);
nurseryController.createNursery('My Lovely Pets');
// userController.listUsers();
