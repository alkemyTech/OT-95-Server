const userService = require('../services/users-service');
const codeStatus = require('../constants/constants');
const messages = require('../constants/messages');

const controller = {
  getAll: async (req, res) => {
    try {
      const users = await userService.getAll(req, res);
      res.json(users);
    } catch (error) {
      res.status(codeStatus.INTERNAL_ERROR).json(messages.INTERNAL_ERROR);
    }
  },
  getOne: async (req, res) => {
    try {
      const user = await userService.getOne(req, res)
      res.json(user);
    } catch (error) {
      res.status(codeStatus.INTERNAL_ERROR).json(messages.INTERNAL_ERROR);
    }
  },
  createUser: async (req, res) => {
    try {
      const user = await userService.create(req, res);
      res.json(user);
    } catch (error) {
      res.status(codeStatus.INTERNAL_ERROR).json(messages.INTERNAL_ERROR);
    }
  },
  deleteUser: async (req, res) => {
    try {
      const user = await userService.delete(req, res);
      res.json(user);
    } catch (error) {
      res.status(codeStatus.INTERNAL_ERROR).json(messages.INTERNAL_ERROR);
    }
  },
  updateUser: async (req, res) => {
    try {
      const user = await userService.update(req, res);
      res.json(user);
    } catch (error) {
      res.status(codeStatus.INTERNAL_ERROR).json(messages.INTERNAL_ERROR);
    }
  },
  login: async (req, res) => {
    try {
      const user = await userService.login(req, res);
      res.json(user);
    } catch (error) {
      res.status(codeStatus.INTERNAL_ERROR).json(messages.INTERNAL_ERROR);
    }
  }
};
module.exports = controller;
