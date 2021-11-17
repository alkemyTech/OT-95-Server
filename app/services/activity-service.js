const activityRepository = require('../repositories/activity-repository');

module.exports = {
  create: (activity) => activityRepository.create(activity),
  update: (id, activity) => activityRepository.update(id, activity),
};
