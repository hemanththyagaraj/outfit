const express = require('express')
const mediaRouter = require('./routes/media-routes')
const app = express()

app.use(express.json())

// all the routes goes here
app.use('/api/v1/media', mediaRouter)

module.exports = app;