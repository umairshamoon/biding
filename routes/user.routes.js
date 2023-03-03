const express = require('express')
const router = express.Router()
const {login,register,depositAmount,getMe} = require('../controllers/user.controller')
const { isLogin } = require('../middleware')

router.post('/login', login)
router.get('/getMe',isLogin, getMe)
router.post('/register', register)
router.post('/deposit',isLogin, depositAmount)

module.exports = router
