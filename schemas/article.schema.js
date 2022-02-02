const Joi = require('joi');

const id = Joi.number().integer().min(1);
const content = Joi.string().min(1);
const title = Joi.string().min(1);
const date = Joi.date();

const createArticleSchema = Joi.object({
  content: content.required(),
  title: title.required(),
  created_at: date.required(),
  updated_at: date.required()
});
const updateArticleSchema = Joi.object({
  content: content.required(),
  title: title.required(),
  created_at: date.required(),
  updated_at: date.required()
});
const getArticleById = Joi.object({
  id: id.required(),
});

module.exports = { createArticleSchema, updateArticleSchema, getArticleById };
