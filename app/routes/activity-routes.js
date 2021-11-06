const express = require('express');

const router = express.Router();
const { create } = require('../controllers/activity-controller');
const { validateCreate } = require('../middlewares/activity-middleware');
const { isAdmin } = require('../middlewares/isAdmin');

router.post('/', [validateCreate, isAdmin], create);

module.exports = router;
