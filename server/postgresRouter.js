const router = require('express').Router();
const controller = require('./postgresController.js');

router
  .route('/items')
  .get(controller.getRandom)

router
  .route('/items/:_id')
  .get(controller.getOne)
  .put(controller.putOne)
  .delete(controller.deleteOne)

router
  .route('/items/post')
  .post(controller.postOne)

module.exports = router;