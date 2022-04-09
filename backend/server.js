const mongoose = require('mongoose')
const express = require('express')
const cookieSession = require('cookie-session')
const path = require('path')
const cors = require('cors')

const AccountRouter = require('./routes/account')
const ApiRouter = require('./routes/api')

const MONGO_URI = process.env.MONGODB_URI || 'mongodb+srv://dzheng:chinainn9209@cluster0.p1avm.mongodb.net/test'

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const app = express()

app.use(express.json())

app.use(cookieSession({
  name: 'session',
  keys: ['apples'],
  maxAge: 60 * 60 * 1000,
}))

app.use(express.static('dist'))

app.use(cors())

app.use('/account', AccountRouter)
app.use('/api/questions', ApiRouter)

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send(err.message)
})

app.get('/favicon.ico', (req, res) => {
  res.status(404).send()
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

app.listen(3000, () => {
  console.log(`listening on port 3000`)
})
