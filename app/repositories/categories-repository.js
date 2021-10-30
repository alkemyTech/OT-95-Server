const { Categories } = require('../../models/index');

const getCategories = async () => {
  const response = await Categories.findAll();
  return response;
};

const getCategory = async (id) => {
  const response = await Categories.findByPk(id);
  return response;
};

const createCategory = async (data) => {
  const response = await Categories.create(data);
  return response;
};

const updateCategory = async (id, data) => {
  const response = await Categories.update(data, { where: { id } });
  return response;
};

const deleteCategory = async (id) => {
  const response = await Categories.destroy({ where: { id } });
  return response;
};

module.exports = {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
