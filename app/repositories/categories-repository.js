const { Categories } = require('../models/index');

module.exports = {
  getCategories: async () => {
    return Categories.findAll();
  },

  getCategory: async (id) => {
    return Categories.findByPk(id);
  },

  createCategory: async (data) => {
    return Categories.create(data);
  },

  updateCategory: async (id, data) => {
    return Categories.update(data, { where: { id } });
  },

  deleteCategory: async (id) => {
    return Categories.destroy({ where: { id } });
  },
};

