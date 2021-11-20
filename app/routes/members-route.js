const express = require('express');
const membersController = require('../controllers/members-controller');
const { isAdmin } = require('../middlewares/isAdmin');
const validateJwt = require('../middlewares/validate-jwt');
const { validateCreation, existMember } = require('../middlewares/members-middlewares');

const router = express.Router();

router.post('/', [validateJwt, isAdmin, ...validateCreation], membersController.create);

router.get('/', [validateJwt, isAdmin], membersController.getAll);

router.put('/:id', [validateJwt, isAdmin, ...existMember], membersController.update);

router.delete('/:id', [validateJwt, isAdmin, ...existMember], membersController.destroy);

module.exports = router;
