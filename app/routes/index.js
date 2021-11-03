const express = require('express');

const router = express.Router();
const usersRouter = require('./users');
const organizationRouter = require('./organization-route');
const categoriesRouter = require('./categories-route');
const membersRouter = require('./members-route');

router.use('/users', usersRouter);

router.use('/organization', organizationRouter);

router.use('/categories', categoriesRouter);

router.use('/members', membersRouter);

module.exports = router;
