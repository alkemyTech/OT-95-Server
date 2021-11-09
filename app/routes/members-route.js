const express = require('express');
const membersController = require('../controllers/members-controller');
const { isAdmin } = require('../middlewares/isAdmin');
const { validateCreation, existMember } = require('../middlewares/members-middlewares');
const validateJwt = require('../middlewares/validate-jwt');

const router = express.Router();

router.post('/', validateCreation, membersController.create);

router.get('/', [validateJwt, isAdmin], membersController.getAll);

router.put('/:id', existMember, membersController.update);

router.delete('/:id', existMember, membersController.destroy);

module.exports = router;
