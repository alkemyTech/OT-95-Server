const UsersRepository = require('../repositories/users-repository');
const codeStatus = require('../constants/constants');
const messages = require('../constants/messages');

module.exports = {
  getAll: async (req, res) => {
    try {
      const users = await UsersRepository.getAll();
      res.status(codeStatus.RESPONSE_OK).json({ data: users });
    } catch (error) {
      res.status(codeStatus.INTERNAL_ERROR).json(messages.INTERNAL_ERROR);
    }
  },
  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await UsersRepository.getOne(id);
      if (!user) {
        res.status(codeStatus.NOT_FOUND_ERROR).json({ message: messages.NOT_FOUND_ERROR });
      }
      res.status(codeStatus.RESPONSE_OK).json({ data: user });
    } catch (error) {
      res.status(codeStatus.INTERNAL_ERROR).json(messages.INTERNAL_ERROR);
    }
  },
  create: async (req, res) => {
    try {
      const data = req.body;
      const user = await UsersRepository.create(data);
      res.json({
        data: user || messages.RESPONSE_OK_NO_CONTENT
      });
    } catch (error) {
      res.status(codeStatus.INTERNAL_ERROR).json(messages.INTERNAL_ERROR);
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await UsersRepository.delete(id);
      res.json({
        data: user ? messages.RESPONSE_OK : messages.RESPONSE_OK_NO_CONTENT
      });
    } catch (error) {
      res.status(codeStatus.INTERNAL_ERROR).json(messages.INTERNAL_ERROR);
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const user = await UsersRepository.update(id, data);
      res.json({
        data: user ? messages.RESPONSE_OK : messages.RESPONSE_OK_NO_CONTENT
      });
    } catch (error) {
      res.status(codeStatus.INTERNAL_ERROR).json(messages.INTERNAL_ERROR);
    }
  }
};
