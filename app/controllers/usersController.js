const { User } = require('../models');

const controller = {
  getAll: async (req, res) => {
    try {
      const users = await User.findAll();
      res.json({
        users
      });
    } catch (error) {
      console.error(error)
      res.status(400).json({
        msg: 'error'
      });
    }
  }
};
module.exports = controller;
