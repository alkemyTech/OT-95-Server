const activityRepository = require('../repositories/activity-repository');

module.exports = {
  getAll: () => activityRepository.getAll(),
  getById: (id) => activityRepository.getById(id),
  create: (activity) => activityRepository.create(activity),
  update: (id, activity) => activityRepository.update(id, activity),
  remove: (id) => activityRepository.remove(id),
};
