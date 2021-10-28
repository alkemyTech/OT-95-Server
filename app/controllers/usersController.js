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
      console.log(`el id es ${id}`);
      const user = await User.findOne({ where: { id: id } });
      res.json({
        user: user || 'No se ha encontrado el usuario buscado'
      });
    } catch (error) {
      res.json(error);
    }
  }
};
module.exports = controller;
