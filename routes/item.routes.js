const express = require('express')
const router = express.Router()
const {create,getAll,bid,getCompleted} = require('../controllers/item.controller')
const { isLogin } = require('../middleware')

router.post('/create',create)
router.get('/',isLogin,getAll)
router.get('/completed',isLogin,getCompleted)
router.put('/bid/:id',isLogin,bid)

module.exports = router
