const express = require('express');
const OrganizationController = require('../controllers/organization-controller');


const router = express.Router();


router.route('/')
  .get(OrganizationController.getPublicData);

module.exports = router;
