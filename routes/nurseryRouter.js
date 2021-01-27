const express = require('express');
const nurseryController = require('../controllers/v1/nurseryController');

const router = express.Router();

router
  .route('/')
  .get(nurseryController.getNurseries)
  .post(nurseryController.createNursery);

router
  .route('/:id')
  .get(nurseryController.getNursery)
  .put(nurseryController.updateNursery)
  .delete(nurseryController.deleteNursery);

module.exports = router;
