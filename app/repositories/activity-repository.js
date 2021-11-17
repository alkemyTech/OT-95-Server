const { Activity } = require('../models/index');

module.exports = {
  create: async activity => Activity.create(activity),

  update: async (id, activity) => {
    const response = await Activity.findByPk(id);
    if (response) {
      return response.update(activity);
    }
    return null;
  },
};
