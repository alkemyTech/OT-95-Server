const express = require('express');

const router = express.Router();

const usersController = require('../controllers/usersController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/getAll', usersController.getAll);

module.exports = router;
