const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": `"name" is required`,
  }),
  carBrand: Joi.string().required().messages({
    "any.required": `"carBrand" is required`,
    "string.empty": `"carBrand" cannot be empty`,
    "string.base": `"carBrand" must be string`,
  }),
  loanAmount: Joi.number().required().messages({
    "any.required": `"loanAmount" is required`,
    "string.empty": `"loanAmount" cannot be empty`,
    "string.base": `"loanAmount" must be number`,
  }),
  day: Joi.date().required().messages({
    "any.required": `"day" is required`,
    "string.empty": `"day" cannot be empty`,
    "string.base": `"day" must be date`,
  }),
});

module.exports = {
  addSchema,
};
