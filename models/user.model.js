const { Schema, model } = require('mongoose')

const schema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  amount:{type:Number,default:0}
})
module.exports = model('user', schema)