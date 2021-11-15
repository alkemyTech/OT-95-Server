const express = require('express');

const router = express.Router();

const usersController = require('../controllers/users-controller');

const validateFields = require('../middlewares/validate-fields');

const validator = require('../helpers/db-validator');

const { check } = require('express-validator');

const decodeToken = require('../middlewares/decode-token');


router.post('/register', [
  // Falta validar si el email ya existe, estimo que será en otro ticket!
  check('email', 'Debes ingresar un email').notEmpty(),
  check('email', 'Debes ingresar un mail válido').isEmail(),
  check('firstName', 'Debes ingresar un nombre').notEmpty(),
  check('lastName', 'Debes ingresar un apellido').notEmpty(),
  check('password', 'Debes ingresar una contraseña').notEmpty(),
  validateFields
], usersController.createUser);

router.post('/login', [
  check('email', 'Debes ingresar un email').notEmpty(),
  check('password', 'Debes ingresar una contraseña').notEmpty(),
  validateFields
], usersController.login);

router.get('/me', decodeToken);
module.exports = router;
