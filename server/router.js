const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/items')
  .get(controller.get)
  .post(controller.post)
  .delete(controller.delete)

router
  .route('/items/:_id')
  .get(controller.getOne)
  .put(controller.putOne)
  .delete(controller.deleteOne)

router
  .route('/items/post')
  .post(controller.postOne)

module.exports = router;