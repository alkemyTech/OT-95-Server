const express = require('express');

const router = express.Router();
const { getAll, create } = require('../controllers/contact-controller');
const { isAdmin } = require('../middlewares/isAdmin');
const { contactCreate } = require('../middlewares/contact-middleware');
const validateJwt = require('../middlewares/validate-jwt');

router.get('/', [validateJwt, isAdmin], getAll);
router.post('/', [validateJwt, contactCreate], create);

module.exports = router;
