const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userController = require('./controllers/v1/userController');
const petController = require('./controllers/v1/petController');
const nurseryController = require('./controllers/v1/nurseryController');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log('Connected to db...');
    // console.log(con.connections);
  })
  .catch((err) => console.error('Can not connect', err));

// petController.createPet('Rex', 'dog', 5, '600dd2e0a3cbce19afe50768');
// petController.createPet('Spyke', 'dog', 4, '600dd2e0a3cbce19afe50768');
// userController.createUser(
//   'Bill',
//   'user@mail.com',
//   true,
//   '600b35a6a98172469f68b957',
// );
// nurseryController.createNursery('My Lovely Pets');
// userController.getAllUser();
// userController.getUserByName('Bill');
// userController.updateUserOne('600c6ba318d24f5226a2361c', 'Joe', 'joe@another-email.com', false, '600c6ba318d24f5226a2361b');
// userController.updateUserTwo('600c6ba318d24f5226a2361c', 'Joe-Older', 'joe-older@another-email.com', true, '600c6ba318d24f5226a2361b');
// userController.deleteUser('600c4849c03dfa836f524541');
// petController.getAllPets('house');
// petController.getPetByName('Spyke');
// const tom = {
//   petName: 'Tom',
//   petType: 'cat',
//   petAge: 5,
//   owner: 'user',
// };
// petController.updatePet(
//   '600ddba9b027c52289b8ce9b', tom,
// );
// petController.deletePet('600ddba9b027c52289b8ce9b');

const nursery = {
  name: 'All Pets Wellcome',
  property: 'user',
};
nurseryController.updateNursery('600c6ba318d24f5226a2361d', nursery);
nurseryController.deleteNursery('600c6ba318d24f5226a2361d');
nurseryController.getNursery();
