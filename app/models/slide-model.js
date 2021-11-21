const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Slide extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Slide.belongsTo(models.Organization, { foreignKey: 'organizationId', as: 'organization' });
    }
  }
  Slide.init({
    imageUrl: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    organizationId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    order: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Slide',
    timestamps: true,
    paranoid: true
  });
  return Slide;
};
