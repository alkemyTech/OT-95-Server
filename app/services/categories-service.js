const categoriesRepository = require('../repositories/categories-repository');
const { uploadFile } = require('./uploadFile');

module.exports = {
  getAll: () => categoriesRepository.getCategories(),

  getById: id => categoriesRepository.getCategory(id),

  create: async (category) => {
    if (category.image) {
      category.image = await uploadFile(category.image);
    }
    return categoriesRepository.createCategory(category);
  },

  update: async (id, category) => {
    try {
      if (category.image) category.image = await uploadFile(category.image);
      return await categoriesRepository.updateCategory(id, category);
    } catch (err) {
      return null;
    }
  },

  remove: id => categoriesRepository.deleteCategory(id),
};
