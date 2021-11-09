const express = require('express');

const router = express.Router();
const { create, update } = require('../controllers/activity-controller');
const { validateCreate } = require('../middlewares/activity-middleware');
const { isAdmin } = require('../middlewares/isAdmin');
const validateJwt = require('../middlewares/validate-jwt');

router.post('/', [validateCreate, validateJwt, isAdmin], create);
router.put('/:id', [validateJwt, isAdmin], update);

module.exports = router;
