const express = require('express');

const router = express.Router();
const usersController = require('../controllers/users-controller');
const validateFields = require('../middlewares/validate-fields');
const validator = require('../helpers/db-validator');
const validateJwt = require('../middlewares/validate-jwt');
const { isAdmin } = require('../middlewares/isAdmin');
const { check } = require('express-validator');
const { matchUser } = require('../middlewares/matchUser');

/* GET users listing. */
// router.get('/', [
  // validateJwt
// ], usersController.getAll);

router.get('/:id', usersController.getOne);

router.post('/', usersController.createUser);

router.delete('/:id', usersController.deleteUser);

router.patch('/:id', usersController.updateUser);

router.get('/users', [validateJwt, isAdmin], usersController.getAll);

router.delete('/:id/down', [validateJwt, matchUser], usersController.softDelete);

module.exports = router;
