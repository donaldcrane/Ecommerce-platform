const Joi = require("joi");

const categoryValidation = data => {
    const schema = Joi.object({
      name: Joi.string().required().min(5)
        .max(100)
        .empty()
        .messages({
          "any.required": "Sorry, category name is required",
          "string.empty": "Sorry, category Name cannot be an empty field",
        }),
      
    });
    return schema.validate(data);
  };


module.exports.categoryValidation = categoryValidation;