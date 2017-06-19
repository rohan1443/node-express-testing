const express = require('express');
const request = require('request')

const app = express();

app.get('/', (req, res) => {
  res.status(200).send({
    error: 'Page not found'
  })
})

app.get('/users', (req, res) => {
  res.send([
    {
      name : 'Rohan',
      age: 29
    },
    {
      name : 'Rahul',
      age: 36
    },
    {
      name : 'John',
      age: 27
    }
  ])
})

app.get('/albums', (req, res) => {
request({
  uri : 'https://rallycoding.herokuapp.com/api/music_albums',
  json : true
}, (error, response, body) => {
  console.log(response.statusCode)
  res.send(body)
})
})

app.listen(3000, () => {
  console.log("Server started")
})

module.exports = {
  app
}