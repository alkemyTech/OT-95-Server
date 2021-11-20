'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Roles', [
      {
        name: 'Admin',
        description: 'Usuario Administrador',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Standard',
        description: 'Usuario Standar',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Regular',
        description: 'Usuario regular',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Roles', null, {});
  }
};
