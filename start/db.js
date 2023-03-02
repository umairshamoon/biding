const { connect } = require('mongoose')

module.exports = function (url) {
  connect(url)
    .then(() => {
      console.log(`Database Connected=> ${url}`)
    })
    .catch((err) => {
      console.log(`Error in connecting to ${url} with =>${err.message}` )
    })
}
 