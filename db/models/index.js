const { Article, articleSchema } = require('./article.model');

function setupModels(sequelize) {
  Article.init(articleSchema, Article.config(sequelize));
};

module.exports = setupModels;
