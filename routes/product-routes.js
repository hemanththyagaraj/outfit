const express = require('express')
const { check } = require('express-validator')
const multer = require('multer')
const validateToken = require('../middlewares/validate-token')
const { createProduct, getAllProducts, getProduct, updateProduct, deleteProduct } = require('../controllers/product-controller')
const uploadFile = require('../middlewares/upload-media')
const validateSuccessfullUpload = require('../middlewares/validate-upload')

const router = express.Router()
const upload = multer()

router.route('/')
    .post([validateToken, upload.single('file'),[
        check('name', 'Please provide a name to the product').exists(),
        check('manufacturer', 'Please enter the manufacturer name').exists(),
        check('price', 'Please enter the product price').exists(),
        check('category', 'Please select category of the product').exists(),
        check('description', 'Please describe this product with minimum of 60 words').matches(/(\b\S+.*?){60,}/),
    ]],uploadFile,validateSuccessfullUpload,createProduct)
    .get(getAllProducts)

router.route('/:id')
    .get(getProduct)
    .put(updateProduct)
    .delete(deleteProduct)

module.exports = router