const { Activity } = require('../../models/index');

const getById = async (id) => {
  const response = await Activity.findByPk(id);

  return response;
};

const getAll = async () => {
  const response = await Activity.findAll();

  return response;
};
const create = async (activity) => {
  const response = await Activity.create(activity);

  return response;
};

const update = async (id, activity) => {
  const response = await Activity.update(activity, { where: { id } });
  return response;
};

const remove = async (id) => {
  const response = await Activity.destroy({ where: { id } });

  return response;
};

module.exports = { getById, getAll, update, remove, create };
