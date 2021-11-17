const { Categories } = require('../models/index');

module.exports = {
  getCategories: async (offset, limit) => {
    return Categories.findAndCountAll({ offset, limit, attributes: ['name'] });
  },

  getCategory: async (id) => {
    return Categories.findByPk(id);
  },

  createCategory: async (data) => {
    return Categories.create(data);
  },

  updateCategory: async (id, data) => {
    const category = await Categories.findByPk(id);
    console.log(category);
    await category.update(data);
    return category;
  },

  deleteCategory: async (id) => {
    return Categories.destroy({ where: { id } });
  },
};
