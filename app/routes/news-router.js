const express = require('express');

const router = express.Router();
const { create, update, getById, getComments, getAll } = require('../controllers/news-controller');
const { isAdmin } = require('../middlewares/isAdmin');
const { validateUpdate, validateCreate } = require('../middlewares/news-middleware');
const validateJwt = require('../middlewares/validate-jwt');

router.get('/', [validateJwt, isAdmin], getAll);
router.post('/', [validateJwt, isAdmin, validateCreate], create);
router.put('/:id', [validateJwt, isAdmin, validateUpdate], update);
router.get('/:id', [validateJwt, isAdmin], getById);
router.get('/:id/comments', getComments);
module.exports = router;
