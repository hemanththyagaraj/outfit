const jwt = require('jsonwebtoken')
const User = require('../models/user-model')

const validateToken = async (req, res, next) => {
    const token = req.header('x-auth-token')
    if (!token) {
        res.status(401).json({
            status: 'fail',
            message: 'No token found'
        })
    }

    
    try {
        const { user } = jwt.verify(token, process.env.JWT_SECRET)
        const userExists = await User.findById(user.id)
        if (!userExists) throw new Error()
        else req.user = user
        next()
    } catch (error) {
        res.status(401).json({
            status: 'fail',
            message: 'Invalid token. Access denied'
        })
    }
}

module.exports = validateToken