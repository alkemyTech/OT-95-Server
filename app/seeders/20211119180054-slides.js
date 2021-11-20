/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Slides', [{
      text: 'descripcion',
      order: 1,
      organizationId: 1,
      imageUrl: 'https://alkemy-ong-md.s3.amazonaws.com/4c6a38d8-31b9-4def-928e-08b7e2355b5d.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      text: 'descripcion',
      order: 2,
      organizationId: 1,
      imageUrl: 'https://alkemy-ong-md.s3.amazonaws.com/4c6a38d8-31b9-4def-928e-08b7e2355b5d.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Slides', null, {});
  }
};
