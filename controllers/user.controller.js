//npm
const bcrypt = require('bcryptjs')
//models
const User = require('../models/user.model')
//validatoins
const validateLogin = require('../validations/login.validation')
const validateUser = require('../validations/userRegister.validate')
//helpers
const joiHelper = require('../helpers/joi.helper')
const jwtSign = require('../helpers/jwtSign.helper')

module.exports = {
  login: async (req, res) => {
    try {
      const { password, email } = req.body
      joiHelper(validateLogin, req.body)
      const user = await User.findOne({ email })
      if(!user) return res.status(404).json({message:'Email is Not Registered'})

      if (!(await bcrypt.compare(password, user.password)))
        throw Error('Incorrect Password')
        
      res.status(200).json({
        message: 'Login successfully',
        token: jwtSign({ id: user.id }),
      })
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  },

  register: async (req, res) => {
    try {
      const { password, username, email } = req.body

      const user = await User.findOne({ email })
      if (user) throw Error('Email already exist')

      //VALIDATE REQUEST BODY
      joiHelper(validateUser, req.body)

      await User.create({
        username,
        email,
        password: await bcrypt.hash(password, 10),
      })
      res.status(200).json({
        message: 'Your request has been sent for approval',
      })
    } catch (error) {
      return res.status(400).json({
        message: error.message || 'Something went Wrong',
      })
    }
  },
  depositAmount:async(req,res)=>{try{
    const {amount}=req.body
    if(amount<=0) return res.status(400).json({message:'Please Enter Valid Amount'})
    const user=await User.findById(req.user.id)
    user.amount+=amount
    await user.save()
    res.status(200).json({message:'Amount has deposited To Your Account'})
  }catch(error){res.status(400).json({ message: error.message })}}
}
