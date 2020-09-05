const express = require('express')
const mediaRouter = require('./routes/media-routes')
const userRouter = require('./routes/user-routes')
const app = express()

app.use(express.json())

// all the routes goes here
app.use('/api/v1/media', mediaRouter)
app.use('/api/v1/users', userRouter)

module.exports = app;