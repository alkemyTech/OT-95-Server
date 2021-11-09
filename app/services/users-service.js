const UsersRepository = require('../repositories/users-repository');
const codeStatus = require('../constants/constants');
const messages = require('../constants/messages');
const bcrypt = require('bcrypt');
const usersRepository = require('../repositories/users-repository');
const { generateJwt } = require('../helpers/generate-jwt');


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
      } else {
        res.status(codeStatus.RESPONSE_OK).json({ data: user });
      }
    } catch (error) {
      res.status(codeStatus.INTERNAL_ERROR).json(messages.INTERNAL_ERROR);
    }
  },
  create: async (req, res) => {
    try {
      const data = req.body;
      const saltRounds = 10;
      data.password = bcrypt.hashSync(data.password, saltRounds);
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
      if (user[0] === 0) {
        res.status(codeStatus.NOT_FOUND_ERROR).json({ message: messages.RESPONSE_OK_NO_CONTENT });
      } else {
        res.status(codeStatus.RESPONSE_OK).json({ user });
      }
    } catch (error) {
      res.status(codeStatus.INTERNAL_ERROR).json(messages.INTERNAL_ERROR);
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await usersRepository.getUserWithEmail(email);
      if (!user) {
        res.status(codeStatus.NOT_FOUND_ERROR).json({
          ok: false
        });
      } else {
        const success = bcrypt.compareSync(password, user.password);
        if (success) {
          const token = await generateJwt(user);
          res.status(codeStatus.RESPONSE_OK).json({ user, token });
        } else {
          res.status(codeStatus.RESPONSE_OK).json(messages.RESPONSE_OK_NO_CONTENT);
        }
      }
    } catch (error) {
      // console.log(error);
      res.status(codeStatus.INTERNAL_ERROR).json(messages.INTERNAL_ERROR);
    }
  }
};
