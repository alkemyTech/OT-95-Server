const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Slide extends Model {
    static associate(models) {
      Slide.belongsTo(models.Organization, { foreignKey: 'organizationId', as: 'organization' });
    }
  }
  Slide.init({
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false
    },
    order: {
      type: DataTypes.INTEGER
    },
    organizationId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Slide',
    timestamps: true,
    paranoid: true
  });
  return Slide;
};
