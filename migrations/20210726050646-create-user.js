'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
          min: 5,
          
        } 
       },
       email: {
         type: Sequelize.STRING,
         allowNull: false,
         validate:{
           min: 5,
           isEmail: true
         } 
        },
       password: {
         type: Sequelize.STRING,
         allowNull: false,
         validate:{
           min: 5,
    
         } 
        },
       role: {
         type: Sequelize.INTEGER,
         allowNull: false,
         validate:{
           max: 1,
           
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
    await queryInterface.dropTable('users');
  }
};