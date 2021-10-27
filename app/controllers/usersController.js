const { User } = require('../models/user');

const controller = {
  getOne: async (req, res) => {
    try {
      res.json({
        msg: 'GetOne'
      });
    } catch (error) {
      res.status(400).json(error);
    }
  }
};
module.exports = controller;
