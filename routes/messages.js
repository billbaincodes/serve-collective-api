const express = require('express')
const router = express.Router()
const messages = require('../messages')


router.get('/', (req, res) => {
  res.json({ messages })
})

router.get('/:id', (req, res, next) => {

  let chosenMessage = messages.filter(message => message.id == req.params.id)

  if (!chosenMessage.length) {
    next()
  }
  else {   
    res.json(chosenMessage)
  }
})


module.exports = router