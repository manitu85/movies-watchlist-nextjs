const next = require('next')
const express = require('express')
const bodyParser = require('body-parser')


const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
// const server = express()
const moviesData = require('./data.json')

app.prepare()
  .then(() => {

    const server = express()
    server.use(bodyParser.json())

    server.get('/api/v1/movies', (req, res) => {
      // return res.json({ message: 'Hello World' })
      return res.json(moviesData)
    })

    server.post('/api/v1/movies', (req, res) => {
      const movie = req.body
      console.log(JSON.stringify(movie));
      
      return res.json(movie)
    })

    server.patch('/api/v1/movies:id', (req, res) => {
      const { id } = req.params
      return res.json({ message: `Updating post of id ${id}` })
    })

    server.delete('/api/v1/movies:id', (req, res) => {
      const { id } = req.params
      return res.json({ message: `Deleting post of id ${id}` })
    })

    server.get('*', (req, res) => {
      // next.js is handling requests and navigation
      return handle(req, res)
  })

  const PORT = process.env.PORT || 3000
  // Server middleware express
  server.listen(PORT, (err) => {
    if (err) throw err
    console.log(`Server ready on port ${PORT}`);
  })
})
 