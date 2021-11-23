const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Organization extends Model {
    static associate(models) {
      Organization.hasMany(models.Slide, { as: 'slides' });
    }
  }
  Organization.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    email: DataTypes.STRING,
    welcomeText: DataTypes.TEXT,
    aboutUsText: DataTypes.TEXT,
    facebookUrl: DataTypes.STRING,
    instagramUrl: DataTypes.STRING,
    linkedinUrl: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Organization',
  });
  return Organization;
};
