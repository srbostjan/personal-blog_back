'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('articles', 'content', Sequelize.TEXT);
    await queryInterface.changeColumn('articles', 'resume', Sequelize.TEXT);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('articles', 'content', Sequelize.STRING);
    await queryInterface.changeColumn('articles', 'resume', Sequelize.STRING);
  }
};
