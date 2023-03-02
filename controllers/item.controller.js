//models
const Item = require('../models/item.model')
//validations
const validateItem =require('../validations/item.validation')
//helpers
const joiHelper =require('../helpers/joi.helper')
module.exports = {
  create: async (req, res) => {
    try {
      joiHelper(validateItem,req.body)
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
  const item=Item.findById(id)
  // if(!)
}catch(error){res.status(400).json({ message: error.message })}}
}