const express = require('express');

const router = express.Router();
const usersRouter = require('./users');
const organizationRouter = require('./organization-route');
const categoriesRouter = require('./categories-route');

router.use('/users', usersRouter);

router.use('/organization', organizationRouter);

router.use('/categories', categoriesRouter);

module.exports = router;
