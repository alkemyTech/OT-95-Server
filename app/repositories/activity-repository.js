const { Activity } = require('../models/index');

module.exports = {
  getById: async id => Activity.findByPk(id),

  getAll: async () => Activity.findAll(),

  create: async activity => Activity.create(activity),

  update: async (id, activity) => {
    const response = await Activity.update(activity, {
      where: { id }
    });
    if (response[0] === 0) return null;
    return Activity.findByPk(id);
  },

  remove: async id => Activity.destroy({ where: { id } }),
};
