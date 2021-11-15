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
    if (await categoriesRepository.getCategory(id)) {
      if (category.image) {
        category.image = await uploadFile(category.image);
      }
      return categoriesRepository.updateCategory(id, category);
    }
    return 0;
  },

  remove: id => categoriesRepository.deleteCategory(id)
};
