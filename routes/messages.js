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



router.post('/', (req, res) => {

  const body = req.body
  messages.push(body)
  res.json({messages: messages})

})


// //post new message
// router.post('/', (req, res, next) => {
//   //Pull data from the post body
//   const body = req.body
//   console.log(body)

//   //insert new data into characters array
//   characters.push(body)
//   res.json({ characters: characters})
// })






module.exports = router