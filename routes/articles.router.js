const express = require('express');
const articleService = require('../services/articles.service');
const { createArticleSchema, updateArticleSchema, getArticleById } = require('../schemas/article.schema');
const validatorHandler = require('../middlewares/validator.handler');

const router = express.Router();
const service = new articleService();

router.get('/', async (req, res, next) => {
  try {
    let articles = await service.getAllArticles();
    res.json(articles);
  } catch (err) {
    next(err);
  }
});

router.post('/',
  validatorHandler(createArticleSchema, 'body'),
  async (req, res, next) => {
    try {
      let body = req.body;
      let article = await service.createArticle(body);
      res.json(article);
    } catch (err) {
      next(err);
    }
  }
);

router.get('/:id',
  validatorHandler(getArticleById, 'params'),
  async (req, res, next) => {
    let id = req.params.id;
    try {
      let article = await service.getArticleById(id);
      res.json(article);
    } catch (err) {
      next(err);
    }
  }
);

router.patch('/:id',
  validatorHandler(updateArticleSchema, 'body'),
  async (req, res, next) => {
    try {
      let id = req.params.id;
      let body = req.body;
      let article = await service.updateArticle(id, body);
      res.json(article);
    } catch(err) {
      next(err);
    }
  }
);

router.delete('/:id',
  validatorHandler(getArticleById, 'params'),
  async (req, res, next) => {
    let id = req.params.id;
    try {
      let article = await service.deleteArticle(id);
      res.json(article);
    } catch (err) {
      next(err);
    }
});


module.exports = router;
