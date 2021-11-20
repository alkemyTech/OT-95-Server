module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Comments', [{
      userId: 1,
      body: 'example body for comment user 1',
      newsId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 2,
      body: 'example body for comment user 2',
      newsId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 3,
      body: 'example body for comment user 3',
      newsId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Comments', null, {});
  }
};
