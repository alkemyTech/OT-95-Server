const express = require('express');

const router = express.Router();
const usersRouter = require('./users');
const organizationRouter = require('./organization-route');
const categoriesRouter = require('./categories-route');
const testimoniaslRouter = require('./testimonials-route');
const activityRouter = require('./activity-routes');
const authRouter = require('./auth');
const membersRouter = require('./members-route');
const slidesRouter = require('./slides-route');
const contactsRouter = require('./contact-routes');
const commentsRouter = require('./comments-routes');
const newsRouter = require('./news-router');
// const swaggerUi = require('swagger-ui-express');
// const swaggerJSDoc = require('swagger-jsdoc');
// const confSwagger = require('../conf-swagger');

// const swaggerDocs = swaggerJSDoc(swaggerOptions);
// const swaggerSpec = swaggerJSDoc(options);

// router.use('/docs', swaggerUi.serve, swaggerUi.setup(confSwagger));

router.use('/users', usersRouter);

router.use('/auth', authRouter);

router.use('/organization', organizationRouter);

router.use('/categories', categoriesRouter);

router.use('/testimonials', testimoniaslRouter);

router.use('/activities', activityRouter);

router.use('/members', membersRouter);

router.use('/slides', slidesRouter);

router.use('/contacts', contactsRouter);

router.use('/news', newsRouter);

router.use('/comments', commentsRouter);

module.exports = router;
