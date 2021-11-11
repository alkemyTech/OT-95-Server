const express = require('express');

const router = express.Router();
const controller = require('../controllers/news');
const { isAdmin } = require('../middlewares/isAdmin');
const { validateUpdate, validateCreate } = require('../middlewares/news-middleware');
const validateJwt = require('../middlewares/validate-jwt');

router.post('/', [validateJwt, isAdmin, validateCreate], controller.create);
router.put('/:id', [validateJwt, isAdmin, validateUpdate], controller.update);

module.exports = router;
