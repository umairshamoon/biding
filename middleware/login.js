const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config')
module.exports = {
  isLogin: function (req, res, next) {
    const token = req.header('authorization')
    if (!token)
      return res
        .status(401)
        .json({ message: 'you are not logged in' })

    try {
      const decoded = jwt.verify(token, JWT_SECRET)
      req.user = decoded
      next()
    } catch (error) {
      res.status(400).json({ message: 'invalid token' })
    }
  },
}
