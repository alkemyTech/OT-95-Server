const express = require('express');

const router = express.Router();
const controller = require('../controllers/comments-controller');
const { isAdmin } = require('../middlewares/isAdmin');
const validateToken = require('../middlewares/validate-jwt');
const { validateComments } = require('../middlewares/comments-middleware');

router.route('/')
  .get([validateToken, isAdmin], controller.getAll)
  .post([validateToken, validateComments], controller.create);

module.exports = router;
