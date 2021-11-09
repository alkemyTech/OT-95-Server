const express = require('express');

const router = express.Router();
const usersRouter = require('./users');
const organizationRouter = require('./organization-route');
const categoriesRouter = require('./categories-route');
const testimoniaslRouter = require('./testimonials-route');
const activityRouter = require('./activity-routes');
const authRouter = require('./auth');
const membersRouter = require('./members-route');


router.use('/users', usersRouter);

router.use('/auth', authRouter);

router.use('/organization', organizationRouter);

router.use('/categories', categoriesRouter);

router.use('/testimonials', testimoniaslRouter);

router.use('/activities', activityRouter);

router.use('/members', membersRouter);

module.exports = router;
