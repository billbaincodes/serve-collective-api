const express = require('express')
const app = express()
const port = process.env.port || 3666
const bodyParser = require('body-parser')
const cors = require('cors')
const messagesRoutes = require('./routes/messages')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.get('/', (req, res) => {
  res.json('🎳 Welcome')
})

app.use('/messages', messagesRoutes)



app.use((req, res, next) => {
  res.status(404).json({ error: { message: `What'd you do?!` }, status: 404})
})


app.listen(port)