'use strict';
const OrganizationService = require('../services/organization-service');
const { validationResult } = require('express-validator');
const codeStatus = require('../constants/constants');
const messages = require('../constants/messages');

module.exports = {

  getAll: async (req, res) => {
    try {
      res.json(await OrganizationService.getAll(req, res));
    } catch (err) {
      res.status(codeStatus.BAD_REQUEST_ERROR).json({ message: messages.BAD_REQUEST_ERROR });
    }
  },

  getById: async (req, res) => {
    try {
      res.json(await OrganizationService.getById(req, res));
    } catch (err) {
      res.status(codeStatus.BAD_REQUEST_ERROR).json({ message: messages.BAD_REQUEST_ERROR });
    }
  },

  getPublicData: async (req, res) => {
    try {
      res.json(await OrganizationService.getPublicData(req, res));
    } catch (err) {
      res.status(codeStatus.BAD_REQUEST_ERROR).json({ message: messages.BAD_REQUEST_ERROR });
    }
  },

  create: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({ status: 422, message: errors.array() });
    } else {
      try {
        res.json(await OrganizationService.create(req, res));
      } catch (err) {
        res.status(codeStatus.BAD_REQUEST_ERROR).json({ message: messages.BAD_REQUEST_ERROR });
      }
    }
  },

  update: async (req, res) => {
    try {
      res.json(await OrganizationService.update(req, res));
    } catch (err) {
      res.status(codeStatus.BAD_REQUEST_ERROR).json({ message: messages.BAD_REQUEST_ERROR });
    }
  },

  updatePublicData: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({ status: 422, message: errors.array() });
    } else {
      try {
        res.json(await OrganizationService.updatePublicData(req, res));
      } catch (err) {
        res.status(codeStatus.BAD_REQUEST_ERROR).json({ message: messages.BAD_REQUEST_ERROR });
      }
    }
  },

  remove: async (req, res) => {
    try {
      res.json(await OrganizationService.remove(req, res));
    } catch (err) {
      res.status(codeStatus.BAD_REQUEST_ERROR).json({ message: messages.BAD_REQUEST_ERROR });
    }
  }

};
