const express = require('express')
const mediaRouter = require('./routes/media-routes')
const userRouter = require('./routes/user-routes')
const authRouter = require('./routes/auth-routes')
const productRouter = require('./routes/product-routes')
const app = express()

app.use(express.json())

// all the routes goes here
app.use('/api/v1/media', mediaRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/products', productRouter)

module.exports = app;