//models
const Item = require('../models/item.model')
const User =require('../models/user.model')
//validations
const validateItem =require('../validations/item.validation')
//helpers
const joiHelper =require('../helpers/joi.helper')
module.exports = {
  create: async (req, res) => {
    try {
      joiHelper(validateItem,req.body)
      req.body.currentBid=req.body.startPrice
      const item=await Item.create(req.body)
      res.status(201).json({message:'Item Created Successfully',item})
    } catch (error) {
      return res.status(400).json({
        message: error.message || 'Something went Wrong',
      })
    }
  },
  getAll:async(req,res)=>{
    try{
    const items=await Item.find()
    if(!items.length) return res.status(404).json({message:'No Item In Database'})
    res.status(200).json(items)
  }catch(error)
  {
    res.status(400).json({ message: error.message })
  }
},
bid:async(req,res)=>{try{
  const {id}=req.params
  const {bid}=req.body
  const item=Item.findById(id)
  if(!item) return res.status(404).json({message:'Item not Found'})
  const user=await User.findById(req.user.id)
  if(user.amount<bid) return res.status(400).json({message:'Not Enough Balance'})
  item.currentBid=bid
  return res.status(200).json({message:'Bid Placed',item})
}catch(error){res.status(400).json({ message: error.message })}}
}