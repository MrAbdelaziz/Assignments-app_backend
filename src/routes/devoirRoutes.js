const express = require('express');
const devoirController = require('../controllers/devoirController');
const router = express.Router();
const devoirSchema = require('../joi/devoirSchema');

router
  .route('/')
  .get(devoirController.index)
  .post(devoirSchema.validate, devoirController.store);

router
  .route('/:id')
  .get(devoirController.show)
  .put(devoirSchema.validate, devoirController.update)
  .delete(devoirController.destroy);

module.exports = router;
