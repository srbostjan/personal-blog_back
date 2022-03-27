'use strict';

const { articleSchema, ARTICLE_TABLE } = require('../../db/models/article.model');


module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn(ARTICLE_TABLE, 'status', articleSchema.status);
  },

  async down (queryInterface) {
    await queryInterface.removeColumn(ARTICLE_TABLE, 'status');
  }
};
