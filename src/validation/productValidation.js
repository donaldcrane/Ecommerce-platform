const Joi = require("joi");

const productValidation = data =>{
    const schema ={
        name: Joi.string()
            .min(5)
            .required,
        categoryName: Joi.string()
            .min(5)
            .required,
        price: Joi.number()
            .min(5)
            .required
    };
    return Joi.validate(data, schema);
};


module.exports.productValidation = productValidation;