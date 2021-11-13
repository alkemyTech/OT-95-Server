const { User } = require('../models');

module.exports = {
  getAll: () => User.findAll(),
  getOne: id => User.findByPk(id),
  create: user => User.create(user),
  delete: id => User.destroy({ where: { id } }),
  softDelete: id => User.update({deletedAt: Date.now() },{ where: { id } }),
  update: (id, data) => User.update(data, { where: { id } }),
  getUserWithEmail: email => User.findOne({ where: { email } })
};
