const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');
class ArticleService {
  async getAllArticles() {
    const article = await models.Article.findAll({
      order: [
        ['id', 'DESC']
      ]
    });
    if(!article) {
      throw boom.notFound('No articles found');
    }
    return article;
  }
  async getArticleById(id) {
    const article = await models.Article.findByPk(id);
    if(!article) {
      throw boom.notFound('No article found');
    }
    return article;
  }
  async createArticle(article) {
    const newArticle = await models.Article.create(article);
    return newArticle;
  }
  async updateArticle(id, body) {
    const article = await this.getArticleById(id);
    const updatedArticle = await article.update(body);
    if(!updatedArticle) {
      throw boom.notFound('No article found');
    }
    return updatedArticle;
  }
  async deleteArticle(id) {
    const article = await this.getArticleById(id);
    const deletedArticle = await article.destroy();
    if(!deletedArticle) {
      throw boom.notFound('No article found');
    }
    return article;
  }
};

module.exports = ArticleService;
