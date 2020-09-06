const express = require('express')
const { check } = require('express-validator')
const validateToken = require('../middlewares/validate-token')
const { createProduct, getAllProducts, getProduct, updateProduct, deleteProduct } = require('../controllers/product-controller')
const router = express.Router()

router.route('/')
    .post([validateToken, [
        check('name', 'Please provide a name to the product').exists(),
        check('manufacturer', 'Please enter the manufacturer name').exists(),
        check('price', 'Please enter the product price').exists(),
        check('coverImage', 'Please upload cover picture of the product').exists(),
        check('category', 'Please select category of the product').exists(),
        check('description', 'Please describe this product with minimum of 60 words').matches(/(\b\S+.*?){60,}/)

    ]],createProduct)
    .get(getAllProducts)

router.route('/:id')
    .get(getProduct)
    .put(updateProduct)
    .delete(deleteProduct)

module.exports = router