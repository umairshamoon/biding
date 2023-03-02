const { Schema, model } = require('mongoose')

const schema = new Schema({
  name: { type: String, required: true },
  startPrice: { type: Number, required: true,default:1 },
  timeWindow: { type: Number, required: true },

})
module.exports = model('item', schema) 