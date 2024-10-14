'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Users', 'password', {
      type: Sequelize.STRING, // change this to the desired data type
      allowNull: false, // specify if null values are allowed
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Users', 'password', {
      type: Sequelize.INTEGER, // revert back to the original type
      allowNull: true, // specify the original allowNull state
    });
  }
};
