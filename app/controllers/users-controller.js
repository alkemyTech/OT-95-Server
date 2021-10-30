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
      res.status(codeStatus.INTERNAL_ERROR).json(messages.INTERNAL_ERROR);
    }
  },
  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await userService.getOne(id);
      res.json({
        data: user ? user : messages.RESPONSE_OK_NO_CONTENT
      });
    } catch (error) {
      res.status(codeStatus.INTERNAL_ERROR).json(messages.INTERNAL_ERROR);
    }
  },
  createUser: async (req, res) => {
    try {
      // Por que no valida el unique email?
      const data = req.body;
      const user = await userService.create(data);
      res.json({
        data: user ? user : messages.RESPONSE_OK_NO_CONTENT
      });
    } catch (error) {
      res.status(codeStatus.INTERNAL_ERROR).json(messages.INTERNAL_ERROR);
    }
  },
  deleteUser: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await userService.delete(id);
      res.json({
        data: user ? user : messages.RESPONSE_OK_NO_CONTENT
      });
    } catch (error) {
      res.status(codeStatus.INTERNAL_ERROR).json(messages.INTERNAL_ERROR);
    }
  },
  updateUser: async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const user = await userService.update(id, data);
      console.log(id);
      console.log(data)
      console.log(user);
      res.json({
        data: user ? user : messages.RESPONSE_OK_NO_CONTENT
      });
    } catch (error) {
      res.status(codeStatus.INTERNAL_ERROR).json(messages.INTERNAL_ERROR);
      
    }
  }
};
module.exports = controller;
