'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
          min: 5,
          
        } 
       },
      content:  {
        type: Sequelize.STRING,
        allowNull: true,
        validate:{
          min: 5,
          
        } 
       },
      description:  {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
          min: 5,
          
        } 
       },
      contact:  {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate:{
          min: 5,
          
        } 
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Posts');
  }
};