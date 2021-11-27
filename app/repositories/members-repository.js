const { Member } = require('../models/index');

module.exports = {
  getById: id => Member.findByPk(id),

  getAll: (offset, limit) => Member.findAndCountAll({ offset, limit }),

  create: data => Member.create(data),

  update: async (id, data) => {
    const member = await Member.findByPk(id);
    await member.update(data);
    return member;
  },

  destroy: id => Member.destroy({ where: { id } })
};
