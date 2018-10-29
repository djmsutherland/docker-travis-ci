const express = require('express')
const app = express()
const travis = require('./controllers/travis')

const PORT = process.env.PORT || 3000

app.use(travis())

app.listen(PORT, () => {
  console.log(`App running on port: ${ PORT }`)
})
