const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();
const userSchema = require('../joi/userScheme');

router
  .route('/')
  .get(userController.index)
  .post(userSchema.validate, userController.store);

router
  .route('/:id')
  .get(userController.show)
  .put(userSchema.validate, userController.update)
  .delete(userController.destroy);

module.exports = router;
