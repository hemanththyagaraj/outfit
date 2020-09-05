const dotenv = require('dotenv')
dotenv.config({ path: `${__dirname}/config.env` })
const app = require('./app')
const connectToDB = require('./database')

//connection to database
connectToDB()

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})