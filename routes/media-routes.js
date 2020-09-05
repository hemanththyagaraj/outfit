const express = require('express')
const multer = require('multer')
const { uploadFile } = require('../controllers/media-controller')

const uploader = multer()

const router = express.Router()

router.route('/')
        .post(uploader.single('file'),uploadFile)

module.exports = router