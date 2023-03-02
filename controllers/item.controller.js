//models
const Item = require('../models/item.model')
//validations
const validateItem =require('../validations/item.validation')
//helpers
const joHelper =require('../helpers/joi.helper')
module.exports = {
  create: async (req, res) => {
    
    await Item.create(req.body)

  },

 
}