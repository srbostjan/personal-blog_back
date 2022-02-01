const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class ArticleService {
  async getAllArticles() {
    const article = await models.Article.findAll();
    if(!article) {
      throw boom.notFound('No articles found');
    }
    return article;
    // const posts = await sequelize.models.post.findAll();
    // return posts;
  }
  async getArticleById(id) {
    const article = await models.Article.findOne({
      where: {
        id
      }
    });
    if(!article) {
      throw boom.notFound('No article found');
    }
    return article;
  }
};

module.exports = ArticleService;
