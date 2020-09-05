const mongoose = require('mongoose')

const connectToDB = async () => {
    const DB = process.env.LOCAL_DATABASE
    try {
        await mongoose.connect(DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        })
        console.log('Connected to database successfully')
    } catch (error) {
        console.log('Failed to connect to database')
    }
}

module.exports = connectToDB