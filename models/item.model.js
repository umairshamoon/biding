const { Schema, model } = require('mongoose')

const schema = new Schema({
  name: { type: String, required: true },
  startPrice: { type: Number, required: true,default:1 },
  timeWindow: { type: Number, required: true },
  currentBid: { type: Number, required: true, },
  bidStatus:{type:Boolean,default:true}
})
module.exports = model('item', schema) 