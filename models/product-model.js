const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product name is mandatory']
    },
    manufacturer: {
        type: String,
        required: [true, 'Product manufacturer is mandatory']
    },
    price: {
        type: Number,
        required: [true, 'Price is mandatory']
    },
    inStock: {
        type: Boolean,
        default: true 
    },
    coverImage: {
        type: String,
        required: [true, 'Product cover image is mandatory']
    },
    category: {
        type: String,
        required: [true, 'Product category is mandatory']
    },
    description: {
        type: String,
        required: [true, 'Product description of minimum 60 words in mandatory']
    }
})

const Product = mongoose.model('product', productSchema)

module.exports = Product