const express = require('express')
const app = express()
const travis = require('./controllers/travis')

app.use(travis())

app.listen(3000, () => {
  console.log('App running on port 3000')
})
