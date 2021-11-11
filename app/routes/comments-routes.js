const express = require('express');

const router = express.Router();
const controller = require('../controllers/comments-controller');
const { isAdmin } = require('../middlewares/isAdmin');
const validateToken = require('../middlewares/validate-jwt');

router.route('/')
  .get(validateToken, isAdmin, controller.getAll);

module.exports = router;
