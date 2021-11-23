const express = require('express');

const router = express.Router();
const usersController = require('../controllers/users-controller');
const validateJwt = require('../middlewares/validate-jwt');
const { isAdmin } = require('../middlewares/isAdmin');
const { isOwnerShip } = require('../middlewares/ownership-middleware');
const { registerValidate } = require('../middlewares/user-middleware');

router.get('/', [validateJwt, isAdmin], usersController.getAll);

router.get('/:id', [validateJwt, isOwnerShip], usersController.getOne);

router.post('/', [validateJwt, isAdmin, registerValidate], usersController.createUser);

router.put('/:id', [validateJwt, isOwnerShip, registerValidate], usersController.updateUser);

router.delete('/:id', [validateJwt, isOwnerShip], usersController.deleteUser);

module.exports = router;
