const express = require('express');
const petController = require('../controllers/v1/petController');

const router = express.Router();

router
  .route('/')
  .get(petController.getAllPets)
  .post(petController.createPet);

router
  .route('/:id')
  .get(petController.getPet)
  .put(petController.updatePet)
  .delete(petController.deletePet);

module.exports = router;
