const express = require('express');

const router = express.Router();
const { update } = require('../controllers/news');
const { isAdmin } = require('../middlewares/isAdmin');
const { validateUpdate, validateCreate } = require('../middlewares/news-middleware');
const validateJwt = require('../middlewares/validate-jwt');
const { create } = require('../repository/news-repository');

router.put('/', [validateJwt, isAdmin, validateCreate], create);
router.put('/:id', [validateJwt, isAdmin, validateUpdate], update);

module.exports = router;