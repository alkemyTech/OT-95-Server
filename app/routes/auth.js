const express = require('express');

const router = express.Router();
const usersController = require('../controllers/users-controller');
const decodeToken = require('../middlewares/decode-token');
const { registerValidate, loginValidate } = require('../middlewares/user-middleware');

router.post('/register', registerValidate, usersController.createUser);

router.post('/login', loginValidate, usersController.login);

router.get('/me', decodeToken);

module.exports = router;
