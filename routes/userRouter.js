const express = require('express');

const userController = require('../controllers/v1/userController');
const authController = require('../controllers/v1/authUser');

const router = express.Router();

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router.post('/signup', authController.signup);
router.post('/login', authController.login);

router
  .route('/:id')
  .get(userController.getUser)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
