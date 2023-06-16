const Joi = require("joi");
const dateRegex = /^\d{2}\.\d{2}\.\d{4}$/;
const moment = require("moment");

const addSchema = Joi.object({
  title: Joi.string().required().messages({
    "any.required": `"name" is required`,
  }),
  brand: Joi.string().required().messages({
    "any.required": `"carBrand" is required`,
    "string.empty": `"carBrand" cannot be empty`,
    "string.base": `"carBrand" must be string`,
  }),
  region: Joi.string().required().messages({
    "any.required": `"region" is required`,
    "string.empty": `"region" cannot be empty`,
    "string.base": `"region" must be string`,
  }),
  branch: Joi.string().required().messages({
    "any.required": `"branch" is required`,
    "string.empty": `"branch" cannot be empty`,
    "string.base": `"branch" must be string`,
  }),
  credit: Joi.number().required().messages({
    "any.required": `"loanAmount" is required`,
    "string.empty": `"loanAmount" cannot be empty`,
    "string.base": `"loanAmount" must be number`,
  }),
  start: Joi.string()
    .regex(dateRegex)
    .custom((value, helpers) => {
      const date = moment(value, "DD.MM.YYYY");
      if (!date.isValid()) {
        return helpers.error("string.dateInvalid");
      }
      return date.toDate();
    }),
  end: Joi.string()
    .regex(dateRegex)
    .custom((value, helpers) => {
      const date = moment(value, "DD.MM.YYYY");
      if (!date.isValid()) {
        return helpers.error("string.dateInvalid");
      }
      return date.toDate();
    }),
});

module.exports = {
  addSchema,
};
