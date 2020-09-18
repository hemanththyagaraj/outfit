const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')
const User = require('../models/user-model')

//route           POST /api/v1/users
//desc            Register a new user
//access          Public
exports.registerUser = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({
            status: 'fail',
            message: errors.array()
        })
    }

    try {
        const { name, email, password, role } = req.body
        const { uploadUrl } = req
        const isExisting = await User.findOne({ email })

        if (isExisting) throw new Error('User with this email already exists')

        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)

        const newUser = await User.create({ name, email, password: hash, role, avatar: uploadUrl })
        const user = await User.findOne({ email }).select('-password')

        jwt.sign({ user: { id: newUser._id } }, process.env.JWT_SECRET, { expiresIn: 36000 }, (err, token) =>{
            if (err) throw new Error('Failed to sign the token')
            else res.status(200).json({
                status: 'success',
                user: {
                    ...user._doc,
                    token
                }
            })
        })
        
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        })
    }
}