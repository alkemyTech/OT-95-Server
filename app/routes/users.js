const express = require('express');

const router = express.Router();

const usersController = require('../controllers/users-controller');

/* GET users listing. */
router.get('/', usersController.getAll);
router.get('/:id', usersController.getOne);
router.post('/', usersController.createUser);
router.delete('/:id', usersController.deleteUser);
router.put('/:id', usersController.updateUser);

module.exports = router;
