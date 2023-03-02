const Joi = require('joi')
module.exports = function (data) {
  const loginSchema = Joi.object({
    name: Joi.string().string().required(),
    startPrice: Joi.number().min(1).required(),
    timeWindow: Joi.string().min(5).required(),

  })
  return loginSchema.validate(data)
}
