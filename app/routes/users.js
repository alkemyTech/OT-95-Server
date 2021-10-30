const express = require('express');

const router = express.Router();

const usersController = require('../controllers/users-controller');

const validateFields = require('../middlewares/validate-fields');

const validator = require('../helpers/db-validator');

const { check } = require('express-validator');

/* GET users listing. */
router.get('/', usersController.getAll);

router.get('/:id', usersController.getOne);

router.post('/', [
  check('email').custom(validator.existsUserWithEmail),
  validateFields
], usersController.createUser);

router.delete('/:id', usersController.deleteUser);

router.put('/:id', usersController.updateUser);

module.exports = router;
