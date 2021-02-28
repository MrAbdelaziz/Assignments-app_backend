const express = require('express');
const matiereController = require('../controllers/MatiereController');
const router = express.Router();
const matiereSchema = require('../joi/matiereSchema');

router
  .route('/')
  .get(matiereController.index)
  .post(matiereSchema.validate, matiereController.store);

router
  .route('/:id')
  .get(matiereController.show)
  .put(matiereSchema.validate, matiereController.update)
  .delete(matiereController.destroy);

module.exports = router;
