'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      firstName: 'Usuario',
      lastName: 'Demo',
      email: 'test@test.com',
      // Important: Password not encrypted yet! 
      password: '1234',
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Ramiro',
      lastName: 'Boza',
      email: 'ramiro.boza@hotmail.com',
      // Important: Password not encrypted yet! 
      password: '123456',
      roleId: 2,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL0cWzQPJD3_OUT5oIbArEj-AwyxRj2thCiG_uP0MLNhv-tgoqQDUfQfknyuPGbe2hkCk&usqp=CAU',
      createdAt: new Date,
      updatedAt: new Date
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
