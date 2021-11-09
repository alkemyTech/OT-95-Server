const rolesRepository = require('../repositories/roles-repository');
const codeStatus = require('../constants/constants');
const messages = require('../constants/messages');

module.exports = {
  getAll: async (req, res) => {
    try {
      const roles = await rolesRepository.getRoles();
      res.status(codeStatus.RESPONSE_OK).json({ data: roles });
    } catch (error) {
      res.status(codeStatus.BAD_REQUEST_ERROR).json({ message: messages.BAD_REQUEST_ERROR });
    }
  },
  getById: async (req, res) => {
    try {
      const rol = await (rolesRepository.getRole(req.params.id));
      if (rol == null) {
        res.status(codeStatus.NOT_FOUND_ERROR).json({ message: messages.NOT_FOUND_ERROR });
      }
      res.status(codeStatus.RESPONSE_OK).json({ data: rol });
    } catch (error) {
      res.status(codeStatus.BAD_REQUEST_ERROR).json({ message: messages.BAD_REQUEST_ERROR });
    }
  },
  remove: async (req, res) => {
    try {
      const rol = await rolesRepository.deleteRole(req.params.id);
      if (rol === 0) {
        res.status(codeStatus.NOT_FOUND_ERROR).json({ message: messages.NOT_FOUND_ERROR });
      }
      res.status(codeStatus.RESPONSE_OK).json({ message: messages.RESPONSE_OK });
    } catch (err) {
      res.status(codeStatus.BAD_REQUEST_ERROR).json({ message: messages.BAD_REQUEST_ERROR });
    }
  },

  create: async (req, res) => {
    try {
      const rol = await rolesRepository.createRole(req.body);
      res.status(codeStatus.RESPONSE_OK_CREATED).json({ data: rol });
    } catch (err) {
      res.status(codeStatus.BAD_REQUEST_ERROR).json({ message: messages.BAD_REQUEST_ERROR });
    }
  },

  update: async (req, res) => {
    try {
      const rol = await rolesRepository.updateRole(req.params.id, req.body);
      if (rol[0] === 0) {
        res.status(codeStatus.NOT_FOUND_ERROR).json({ message: messages.NOT_FOUND_ERROR });
      }
      res.status(codeStatus.RESPONSE_OK).json({ message: messages.RESPONSE_OK });
    } catch (err) {
      res.status(codeStatus.BAD_REQUEST_ERROR).json({ message: messages.BAD_REQUEST_ERROR });
    }
  },
};
