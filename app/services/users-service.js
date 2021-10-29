const { User } = require('../models');

module.exports = {
  getAll: () => User.findAll(),
};
