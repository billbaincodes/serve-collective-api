const express = require('express')
const app = express()
const port = process.env.port || 3666
const bodyParser = require('body-parser')
const cors = require('cors')
const messages = require('./messages')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.get('/', (req, res) => {
  res.json('🎳 Welcome')
})

app.get('/messages', (req, res) => {
  res.json({ messages})
})

app.get('/messages/:id', (req, res, next) => {

  let chosenMessage = messages.filter(message => message.id == req.params.id)

  if (!chosenMessage.length) {
    next()
  }
  else {   
    res.json(chosenMessage)
  }
})

app.use((req, res, next) => {
  res.status(404).json({ error: { message: `What'd you do?!` }, status: 404})
})


app.listen(port)