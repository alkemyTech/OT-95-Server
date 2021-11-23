module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('News', [{
      name: 'example news',
      content: 'content example',
      image: 'image.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('News', null, {});
  }
};
