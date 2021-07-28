'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    name: {
     type: DataTypes.STRING,
     allowNull: false,
     validate:{
       min: 5,
       max: 100
     } 
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        min: 5,
        max: 100,
        isEmail: true
      } 
     },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        min: 5,
        max: 100
      } 
     },
    role: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        max: 1,
       } 
     }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};