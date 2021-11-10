const express = require('express');
const router = express.Router();
const { getAll } = require('../controllers/contact-controller');
const isAdmin = require('../middlewares/isAdmin');
const validateJwt = require('../middlewares/validate-jwt');

router.get('/', [validateJwt, isAdmin], getAll);

module.exports = router;
