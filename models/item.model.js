const { Schema, model } = require('mongoose')

const schema = new Schema({
  name: { type: String, required: true },
  startPrice: { type: String, required: true },
  timeWindow: { type: String, required: true },

})
module.exports = model('user', schema)