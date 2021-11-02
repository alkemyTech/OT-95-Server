const express = require('express');

const router = express.Router();
const usersRouter = require('./users');
const organizationRouter = require('./organization-route');
const categoriesRouter = require('./categories-route');
const authRouter = require('./auth');

router.use('/users', usersRouter);

router.use('/auth', authRouter);

router.use('/organization', organizationRouter);

router.use('/categories', categoriesRouter);

module.exports = router;
