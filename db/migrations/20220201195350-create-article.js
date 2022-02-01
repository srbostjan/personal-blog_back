'use strict';

const { articleSchema, ARTICLE_TABLE } = require('../../db/models/article.model');

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(ARTICLE_TABLE, articleSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(ARTICLE_TABLE);
  }
};
