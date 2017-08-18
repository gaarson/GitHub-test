const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, '../public')))

app.use('/api/github', require('./routes/github'))
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')))

module.exports = app
