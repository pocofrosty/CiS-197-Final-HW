const express = require('express')

const Question = require('../models/question')
const isAuthenticated = require('../middlewares/isAuthenticated')

const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    const questions = await Question.find()
    res.json(questions)
  } catch (err) {
    next(err)
  }
})

router.post('/add', isAuthenticated, async (req, res, next) => {
  try {
    const { body: { questionText } } = req
    const { session: { username: author } } = req
    await Question.create({ questionText, author })
    res.send('Question Sucessfully Added')
  } catch (err) {
    next(err)
  }
})

router.post('/answer', isAuthenticated, async (req, res, next) => {
  try {
    const { body: { _id, answer } } = req
    await Question.updateOne({ _id }, { answer })
    res.send('Question Updated')
  } catch (err) {
    next(err)
  }
})

module.exports = router
