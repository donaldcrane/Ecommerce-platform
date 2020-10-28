const Joi = require("joi");

const categoryValidation = data =>{
    const schema ={
        name: Joi.string()
            .min(5)
            .required,
    };
    return Joi.validate(data, schema);
};


module.exports.categoryValidation = categoryValidation;