const express = require('express');
const assignmentController = require('../controllers/AssignmentController');
const router = express.Router();
const assignmentSchema = require('../joi/assignmentSchema');

router
  .route('/')
  .get(assignmentController.index)
  .post(assignmentSchema.validate, assignmentController.store);

router
  .route('/:id')
  .get(assignmentController.show)
  .put(assignmentSchema.validate, assignmentController.update)
  .delete(assignmentController.destroy);

module.exports = router;
