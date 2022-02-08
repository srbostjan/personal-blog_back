'use strict';

const { articleSchema, ARTICLE_TABLE } = require('../../db/models/article.model');


module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn(ARTICLE_TABLE, 'portrait', articleSchema.portrait);
    await queryInterface.addColumn(ARTICLE_TABLE, 'resume', articleSchema.resume);
    await queryInterface.addColumn(ARTICLE_TABLE, 'alt', articleSchema.alt);
  },

  async down (queryInterface) {
    await queryInterface.removeColumn(ARTICLE_TABLE, 'portrait');
    await queryInterface.removeColumn(ARTICLE_TABLE, 'resume');
    await queryInterface.removeColumn(ARTICLE_TABLE, 'alt');
  }
};
