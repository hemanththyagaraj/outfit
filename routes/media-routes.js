const express = require('express')
const { check } = require('express-validator')
const multer = require('multer')
const { uploadMedia } = require('../controllers/media-controller')
const uploadFile = require('../middlewares/upload-media')
const validateToken = require('../middlewares/validate-token')
const validateSuccessfullUpload = require('../middlewares/validate-upload')

const upload = multer()

const router = express.Router()

router.route('/')
        .post([validateToken,upload.single('file'),[
                check('file', 'Please select a file').exists(),
            ],uploadFile, validateSuccessfullUpload],uploadMedia)

module.exports = router