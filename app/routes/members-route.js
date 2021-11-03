const express = require('express');
const membersController = require('../controllers/members-controller');
const { validateCreation } = require('../middlewares/members-middlewares');

const router = express.Router();

router.post('/', validateCreation, membersController.create);

router.get('/', membersController.getAll);

module.exports = router;
