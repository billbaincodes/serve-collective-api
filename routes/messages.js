const express = require('express')
const router = express.Router()
const messages = require('../messages')

//get all route
router.get('/', (req, res) => {
  res.json(messages)
})

//get message by id
router.get('/:id', (req, res, next) => {
  let chosenMessage = messages.filter(message => message.id == req.params.id)
  if (!chosenMessage.length) {
    next()
  }
  else {   
    res.json(chosenMessage)
  
  }
})


//post new message
router.post('/', (req, res) => {
  const body = req.body
  messages.push(body)
  res.json({messages: messages})
})


//put an existing message
router.put('/:id', (req, res) => {
  const body = req.body
  const id = req.params.id

  const updatedMessage = messages.map(message => {
    if (message.id == id) {
      return body
    }
    return message
  })
  res.json({characters: updatedMessage})
})




// router.put('/:id', (req, res) => {
//   const body = req.body
//   const id = req.params.id
  // find correct resource by its id
  // let characterMatch = characters.map(character => character.id == id)
  // replace whats in the current characters array with body
  // res.json the modified array
//   const updatedCharacters = characters.map(character => {
//     if(character.id == id) {
//       return body
//     }
//     return character
//   })
//   res.json({characters: updatedCharacters})
// })






module.exports = router