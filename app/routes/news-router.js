const express = require('express');

const router = express.Router();
const { update } = require('../controllers/news');
const { isAdmin } = require('../middlewares/isAdmin');
const validateJwt = require('../middlewares/validate-jwt');

router.put('/:id', [validateJwt, isAdmin], update);

module.exports = router;