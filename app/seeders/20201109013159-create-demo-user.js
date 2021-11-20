const faker = require('faker');
const bcrypt = require('bcrypt');

const fakerUser = [{
  firstName: 'admin',
  lastName: 'test',
  email: 'admin@admin.com',
  password: bcrypt.hashSync('123456', 10),
  image: faker.image.image(),
  roleId: 1,
  deletedAt: null,
  createdAt: new Date(),
  updatedAt: new Date(),
},
];

for (let l = 0; l <= 20; l++) {
  const role = l < 10 ? 2 : 3;

  fakerUser.push({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: bcrypt.hashSync('123456', 10),
    image: faker.image.image(),
    roleId: role,
    deletedAt: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
}
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', fakerUser, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
