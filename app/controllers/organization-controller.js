'use strict';
const OrganizationService = require('../services/organization-service');
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

  create: async (req, res) => {
    try {
      res.json(await OrganizationService.create(req, res));
    } catch (err) {
      res.status(codeStatus.BAD_REQUEST_ERROR).json({ message: messages.BAD_REQUEST_ERROR });
    }
  },

  update: async (req, res) => {
    try {
      res.json(await OrganizationService.update(req, res));
    } catch (err) {
      res.status(codeStatus.BAD_REQUEST_ERROR).json({ message: messages.BAD_REQUEST_ERROR });
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
