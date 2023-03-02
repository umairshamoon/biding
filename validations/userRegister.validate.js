const Joi = require('joi')
module.exports = function (admin) {
  const adminSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min().required(),
  })
  return adminSchema.validate(admin)
}
