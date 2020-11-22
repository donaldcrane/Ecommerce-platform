"use strict";

var Joi = require("joi");

var productValidation = function productValidation(data) {
  var schema = Joi.object({
    name: Joi.string().required().min(5).max(100).empty().messages({
      "any.required": "Sorry, product name is required",
      "string.empty": "Sorry, product Name cannot be an empty field"
    }),
    categoryName: Joi.string().required().min(5).max(1024).max(100).empty().messages({
      "any.required": "Sorry, product name is required",
      "string.empty": "Sorry, product name cannot be an empty field",
      "string.min": "Product name should have a minimum length of 5"
    }),
    price: Joi.number().required().messages({
      "string.empty": "Sorry, price cannot be an empty field"
    })
  });
  return schema.validate(data);
};

module.exports.productValidation = productValidation;
//# sourceMappingURL=productValidation.js.map