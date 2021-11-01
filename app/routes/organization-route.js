'use strict';
const express = require('express');
const OrganizationController = require('../controllers/organization-controller');

const router = express.Router();

router.route('/')
    .get(OrganizationController.getAll)
    .post(OrganizationController.create);

router.route('/:id')
    .get(OrganizationController.getById)
    .put(OrganizationController.update)
    .delete(OrganizationController.remove);

module.exports = router;
