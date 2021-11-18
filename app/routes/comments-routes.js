const express = require('express');

const router = express.Router();
const controller = require('../controllers/comments-controller');
const { isAdmin } = require('../middlewares/isAdmin');
const validateToken = require('../middlewares/validate-jwt');
const { commentCreate, commentUpdate, commentIsYours } = require('../middlewares/comments-middleware');


router.route('/')
  .get([validateToken, isAdmin], controller.getAll)
  .post([validateToken, commentCreate], controller.create);

router.route('/:id')
  .put([validateToken, commentUpdate, commentIsYours], controller.update)
  .delete([validateToken, commentIsYours], controller.delete);

module.exports = router;
