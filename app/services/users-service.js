const { User } = require('../models');

module.exports = {
  getAll: () => User.findAll(),
  getOne: id => User.findByPk(id),
  create: user => User.create(user),
  delete: id => User.destroy({ where: { id } })
};
