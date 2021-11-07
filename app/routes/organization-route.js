'use strict';
const express = require('express');
const OrganizationController = require('../controllers/organization-controller');
const middleware = require('../middlewares/organization-middleware');
const { isAdmin } = require('../middlewares/isAdmin');

const router = express.Router();

router.route('/')
    .get(OrganizationController.getAll)
    .post(middleware.validateOrgCreateData, OrganizationController.create);

router.route('/:id')
    .get(OrganizationController.getById)
    .put(OrganizationController.update)
    .delete(OrganizationController.remove);

router.route('/public/:id')
    .put(isAdmin, middleware.validateOrgPublicUpdate, OrganizationController.updatePublicData);

module.exports = router;
