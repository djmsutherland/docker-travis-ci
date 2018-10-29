const { Router } = require('express')

module.exports = (router = new Router()) => {
  router.get('/travis', async (req, res) => {
    return res.json({
      message: 'Hello Travis!'
    })
  })

  return router
}
