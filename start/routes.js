//routes
const userRoutes = require('../routes/user.routes')
const itemRoutes = require('../routes/item.routes')

//
module.exports = function (app, express) {
  app.use(express.json())
  app.use('/api/user', userRoutes)
  app.use('/api/item', itemRoutes)
  app.use((req, res, next) => {
    const error = new Error('INVALID ROUTE')
    error.status = 404
    next(error) 
  })
  app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
      message: error.message,
    })
  })
}
