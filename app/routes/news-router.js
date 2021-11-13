const express = require('express');

const router = express.Router();
const { update } = require('../controllers/news');
const { isAdmin } = require('../middlewares/isAdmin');
const { validateUpdate, validateCreate } = require('../middlewares/news-middleware');
const validateJwt = require('../middlewares/validate-jwt');
const { create, update,  } = require('../repository/news-repository');

router.post('/', [validateJwt, isAdmin, validateCreate], create);
router.put('/:id', [validateJwt, isAdmin, validateUpdate], update);
router.get('/:id', [validateJwt, isAdmin], getById);

module.exports = router;