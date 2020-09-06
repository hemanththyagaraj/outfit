const express = require('express')
const  { check } = require('express-validator')
const { registerUser } = require('../controllers/user-controller')
const router = express.Router()

router.route('/')
    .post([
        check('name', 'Please enter your name').exists(),
        check('email', 'Please enter a valid email address').isEmail(),
        check('password', 'Please enter a password with minimum 6 characters').isLength({ min: 6 })
    ],registerUser)

module.exports = router