const statusCode = require('../constants/constants');
const messages = require('../constants/messages');
const RoleService = require('../services/roles-service');

module.exports = {

  getById: async (req, res) => {
    try {
      res.json(await RoleService.getById(req, res));
    } catch (err) {
      res.status(statusCode.BAD_REQUEST_ERROR).json({ message: messages.BAD_REQUEST_ERROR });
    }
  },


  getAll: async (req, res) => {
    try {
      res.json(await RoleService.getAll(req, res));
    } catch (err) {
      res.status(statusCode.BAD_REQUEST_ERROR).json({ message: messages.BAD_REQUEST_ERROR });
    }
  },

  create: async (req, res) => {
    try {
      res.json(await RoleService.create(req, res));
    } catch (err) {
      res.status(statusCode.BAD_REQUEST_ERROR).json({ message: messages.BAD_REQUEST_ERROR });
    }
  },

  remove: async (req, res) => {
    try {
      res.json(await RoleService.remove(req, res));
    } catch (err) {
      res.status(statusCode.BAD_REQUEST_ERROR).json({ message: messages.BAD_REQUEST_ERROR });
    }
  },

  update: async (req, res) => {
    try {
      res.json(await RoleService.update(req, res));
    } catch (err) {
      res.status(statusCode.BAD_REQUEST_ERROR).json({ message: messages.BAD_REQUEST_ERROR });
    }
  },

};
