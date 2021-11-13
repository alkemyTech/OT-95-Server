const express = require('express');

const router = express.Router();
const { create, update, getById }  = require('../controllers/news-controller');
const { isAdmin } = require('../middlewares/isAdmin');
const { validateUpdate, validateCreate } = require('../middlewares/news-middleware');
const validateJwt = require('../middlewares/validate-jwt');

router.post('/', [validateJwt, isAdmin, validateCreate], create);
router.put('/:id', [validateJwt, isAdmin, validateUpdate], update);
router.get('/:id', [validateJwt, isAdmin], getById);

module.exports = router;