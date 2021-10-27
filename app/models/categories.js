const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  Categories.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.STRING, allowNull: true },
      image: { type: DataTypes.STRING, allowNull: true },
    },
    {
      sequelize,
      modelName: 'Categories',
      paranoid: true,
    }
  );
  return Categories;
};
