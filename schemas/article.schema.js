const Joi = require('joi');

const id = Joi.number().integer().min(1);
const content = Joi.string().min(1);
const title = Joi.string().min(1);
const date = Joi.date();
const portrait = Joi.string().min(1);
const resume = Joi.string().min(1);
const alt = Joi.string().min(1);

const createArticleSchema = Joi.object({
  content: content.required(),
  title: title.required(),
  created_at: date.required(),
  updated_at: date.required(),
  portrait: portrait.required(),
  resume: resume.required(),
  alt: alt.required()
});
const updateArticleSchema = Joi.object({
  content: content.required(),
  title: title.required(),
  created_at: date.required(),
  updated_at: date.required(),
  portrait: portrait.required(),
  resume: resume.required(),
  alt: alt.required()
});
const getArticleById = Joi.object({
  id: id.required(),
});

module.exports = { createArticleSchema, updateArticleSchema, getArticleById };
