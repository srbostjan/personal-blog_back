const express = require('express');
const articleService = require('../services/articles.service');

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
router.get('/:id', async (req, res, next) => {
  let id = req.params.id;
  try {
    let article = await service.getArticleById(id);
    res.json(article);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
