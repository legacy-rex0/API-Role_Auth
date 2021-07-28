'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Post.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        min: 5
        
      } 
     },
    content:  {
      type: DataTypes.STRING,
      allowNull: true,
      validate:{
        min: 5,
        
      } 
     },
    description:  {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        min: 5,
        
      } 
     },
    contact:  {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        min: 5,
        
      } 
     }
  }, {
    sequelize,
    modelName: 'Post',
    tableName: 'posts'
  });
  return Post;
};