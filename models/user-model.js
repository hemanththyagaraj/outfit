const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    role: {
        type: String,
        default: 'User'
    },
    avatar: {
        type: String,
        default: "https://storage.googleapis.com/download/storage/v1/b/outfit-7e104.appspot.com/o/avatar.svg?generation=1599371973341630&alt=media"
    }
})

const User = mongoose.model('user', userSchema)

module.exports = User