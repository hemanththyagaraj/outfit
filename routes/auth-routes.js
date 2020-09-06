const express = require('express')
const { check } = require('express-validator')
const { login } = require('../controllers/auth-controller')
const router = express.Router()

router.route('/')
    .post([
        check('email', 'Please enter a valid email address').isEmail(),
        check('password', 'Password should be 6 characters').isLength({ min: 6 })
    ],login)

module.exports = router