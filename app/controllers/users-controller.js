const { User } = require('../models');
const userService = require('../services/users-service');
const codeStatus = require('../constants/constants');
const messages = require('../constants/messages');

const controller = {
  getAll: async (req, res) => {
    try {
      const users = await userService.getAll();
      res.json({
        data: users.length > 0 ? users : messages.RESPONSE_OK_NO_CONTENT
      });
    } catch (error) {
      console.error(error);
      res.status(codeStatus.INTERNAL_ERROR).json(messages.INTERNAL_ERROR);
    }
  },
  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findOne({ where: { id } });
      res.json({
        user: user || 'No se ha encontrado el usuario buscado'
      });
    } catch (error) {
      res.json(error);
    }
  },
  createUser: async (req, res) => {
    try {
      const data = req.body;
      const user = await User.create(data);
      res.json(user);
    } catch (error) {
      res.json(error);
    }
  }
};
module.exports = controller;
