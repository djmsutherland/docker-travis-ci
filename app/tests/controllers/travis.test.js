const express = require('express')
const request = require('supertest')
const travis = require('../../controllers/travis')

const initialise = () => {
  const app = express()
  app.use(travis())
  return app
}

describe('GET /travis', () => {
  test('it should return the message "Hello Travis!"', async () => {
    const app = initialise()
    const res = await request(app).get('/travis')

    expect(res.body).toEqual({ message: 'Hello Travis!' })
  })
})
