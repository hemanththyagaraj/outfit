const { validationResult } = require('express-validator')
const User = require('../models/user-model')
const Product = require('../models/product-model')

//route              POST /api/v1/products
//desc               Created a new product(admin only)
//access             Private  
exports.createProduct = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json({ status: 'fail', message: errors.array() })

    try {
        const { user } = req
        const { role } = await User.findById(user.id)

        //deny access if role other than admin
        if(role !== 'Admin') return res.status(401).json({ status: 'fail', message: 'Access denied. You are not authorized to create a product' })

        //create new product
        await Product.create(req.body)
        res.status(201).json({
            status: 'success',
            message: 'Successfully created the product'
        })
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: 'Server error'
        })
    }
}


//route              GET /api/v1/products
//desc               Get all products
//access             Public
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find()
        return res.status(200).json({
            status: 'success',
            data: {
                products
            }
        })
    } catch (error) {
        res.status(500).status({
            status:'fail',
            message: 'Server error'
        })
    }
}  

//route              GET /api/v1/products/:id
//desc               Get individual product
//access             Public
exports.getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        return res.status(200).json({
            status: 'success',
            data: {
                product
            }
        })
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: 'Server error'
        })
    }
}


//route              PUT /api/v1/products/:id
//desc               Update a product
//access             Private
exports.updateProduct = async (req, res) => {
    try {
        await Product.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            status: 'success',
            message: 'Product updated successfully'
        })
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: 'Server error'
        })
    }
}


//route              DELETE /api/v1/products/:id
//desc               Delete a product
//access             Private
exports.deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id)
        return res.status(204).json({
            status: 'success',
            message: 'Product deleted successfully'
        })
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: 'Server error'
        })
    }
}
