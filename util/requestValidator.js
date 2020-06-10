const Joi = require('joi');
const ApiError = require('./apiError.js');

module.exports = {
    validate: async function (data, schema, options = {}) {
        await Joi.validate(data, schema, options).then(function (data) {
            console.log(data);
        }).catch(function (err) {
            throw new ApiError('request.paramError', err.message);
        });
    }
};