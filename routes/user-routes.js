const express = require('express')
const  { check } = require('express-validator')
const multer = require('multer')
const { registerUser } = require('../controllers/user-controller')
const uploadFile = require('../middlewares/upload-media')
const router = express.Router()

const upload = multer()

router.route('/')
    .post([upload.single('file'),[
        check('name', 'Please enter your name').exists(),
        check('email', 'Please enter a valid email address').isEmail(),
        check('password', 'Please enter a password with minimum 6 characters').isLength({ min: 6 }),
    ],uploadFile],registerUser)

module.exports = router 