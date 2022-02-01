const express = require('express');
const articlesRouter = require('../routes/articles.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/articles', articlesRouter);
};

module.exports = routerApi;
