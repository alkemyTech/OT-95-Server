'use strict';
const OrganizationRepository = require('../repositories/organization-repository');
const codeStatus = require('../constants/constants');
const messages = require('../constants/messages');

module.exports = {

  getAll: async (req, res) => {
    try {
      const organizations = await OrganizationRepository.getAll();
      res.status(codeStatus.RESPONSE_OK).json({ data: organizations });
    } catch (err) {
      res.status(codeStatus.BAD_REQUEST_ERROR).json({ message: messages.BAD_REQUEST_ERROR });
    }
  },

  getById: async (req, res) => {
    try {
      const organization = await OrganizationRepository.getById(req.params.id);
      if (organization === null) {
        res.status(codeStatus.NOT_FOUND_ERROR).json({ message: messages.NOT_FOUND_ERROR });
      }
      res.status(codeStatus.RESPONSE_OK).json({ data: organization });
    } catch (err) {
      res.status(codeStatus.BAD_REQUEST_ERROR).json({ message: messages.BAD_REQUEST_ERROR });
    }
  },

  create: async (req, res) => {
    try {
      const organization = await OrganizationRepository.create(req.body);
      res.status(codeStatus.RESPONSE_OK_CREATED).json({ data: organization });
    } catch (err) {
      res.status(codeStatus.BAD_REQUEST_ERROR).json({ message: messages.BAD_REQUEST_ERROR });
    }
  },

  update: async (req, res) => {
    try {
      const organization = await OrganizationRepository.update(req.params.id, req.body);
      if (organization[0] === 0) {
        res.status(codeStatus.NOT_FOUND_ERROR).json({ message: messages.NOT_FOUND_ERROR });
      }
      res.status(codeStatus.RESPONSE_OK_UPDATED).json({ message: messages.RESPONSE_OK_UPDATED });
    } catch (err) {
      res.status(codeStatus.BAD_REQUEST_ERROR).json({ message: messages.BAD_REQUEST_ERROR });
    }
  },

  updatePublicData: async (req, res) => {
    try {
      const organizationData = {
        name: req.body.name,
        image: req.body.image,
        phone: req.body.phone,
        address: req.body.address
      };
      const organization = await OrganizationRepository.update(req.params.id, organizationData);
      if (organization[0] === 0) {
        res.status(codeStatus.NOT_FOUND_ERROR).json({ message: messages.NOT_FOUND_ERROR });
      }
      res.status(codeStatus.RESPONSE_OK_UPDATED).json({ message: messages.RESPONSE_OK_UPDATED });
    } catch (err) {
      res.status(codeStatus.BAD_REQUEST_ERROR).json({ message: messages.BAD_REQUEST_ERROR });
    }
  },

  remove: async (req, res) => {
    try {
      const organization = await OrganizationRepository.remove(req.params.id);
      if (organization === 0) {
        res.status(codeStatus.NOT_FOUND_ERROR).json({ message: messages.NOT_FOUND_ERROR });
      }
      res.status(codeStatus.RESPONSE_OK).json({ message: messages.RESPONSE_OK });
    } catch (err) {
      res.status(codeStatus.BAD_REQUEST_ERROR).json({ message: messages.BAD_REQUEST_ERROR });
    }
  }

};
