const Joi = require('joi')
module.exports = function (data) {
  const loginSchema = Joi.object({
    name: Joi.string().required(),
    startPrice: Joi.number().min(1).required(),
    timeWindow: Joi.number().min(5).required(),

  })
  return loginSchema.validate(data)
}
