const { User } = require('../models');

const controller = {
  getAll: async (req, res) => {
    try {
      const users = await User.findAll();
      res.json({
        users
      });
    } catch (error) {
      res.status(400).json({
        msg: 'error'
      });
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
