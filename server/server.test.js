const request = require('supertest')
const expect = require('expect')

let app = require('./server').app;
//import { app } from './server'

describe('testing using supertest for HTTP requests', () => {
  it('should return Hello World as the response - supertest', (done) => {
    request(app)
    .get('/')
    .expect(200)
    .expect((res) => {
      expect(res.body).toInclude({
        error: 'Page not found'
      })
    })
    .end(done)
  })

  it('should give the response for the User HTTP request', (done) => {
    request(app)
    .get('/users')
    .expect(200)
    .expect((res) => {
      expect(res.body).toInclude({
        name: 'Rohan',
        age: 29
      })
    })
    .end(done)
  })
})

