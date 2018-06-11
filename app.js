const express = require('express')
const bodyParser = require('body-parser')
const http = require('http')

const  { log } = require('./helper')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(log('diariodonoob-log.json'))


app.post('/', (req, res) => res.status(200).json(req.body))

const port = process.env.PORT || 8080

const server = http.createServer(app)

server.listen(port)