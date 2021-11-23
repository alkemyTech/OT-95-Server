module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Slides', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      imageUrl: {
        type: Sequelize.STRING,
        allowNull: false
      },
      text: {
        type: Sequelize.STRING,
        allowNull: false
      },
      order: {
        type: Sequelize.INTEGER
      },
      organizationId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'organizations',
          key: 'id'
        },
      },
      deletedAt: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Slides');
  }
};
