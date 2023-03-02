const express = require('express')
const router = express.Router()
const {create,getAll,bid} = require('../controllers/item.controller')
const { isLogin } = require('../middleware')

router.post('/create',isLogin,create)
router.get('/',isLogin,getAll)
router.post('/bid/:id',isLogin,bid)

module.exports = router
