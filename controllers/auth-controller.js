const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/user-model')

//route               POST   /api/v1/auth
//desc                Login user and return token
//access              Public 
exports.login = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({
            status: 'fail',
            message: errors.array()
        })
    }

    try {
        const { email, password } = req.body
        const userPassword = await User.findOne({ email })
        const user = await User.findOne({ email }).select('-password')

        //if user email does not exist
        if (!user) return res.status(401).json({ status: 'fail', message: 'User with this email does not exist' })

        //check if user entered and password stored in database match
        const isMatch = await bcrypt.compare(password, userPassword.password)

        // if user email does not exist or password does not match with hashed password(stored in database)
        if (!isMatch) return res.status(401).json({ status: 'fail', message: 'Invalid credentials' })

        // if email and password match, send back jwt token to user
        jwt.sign({ user: { id: user._id } }, process.env.JWT_SECRET, { expiresIn: 36000 }, (err, token) => {
            if (err) throw new Error('Failed to sign the token')
            else return res.status(200).json({
                status: 'success',
                user: { token, ...user._doc }
            })
        })
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: 'Server error'
        })
    }
}