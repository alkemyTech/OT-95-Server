const { Activity } = require('../models/index');

module.exports = {
  create: async (activity) => Activity.create(activity),

  update: async (id, activity) => {
    const response = await Activity.update(activity, {
      where: { id },
    });
    if (response[0] === 0) return null;
    return Activity.findByPk(id);
  },
};
