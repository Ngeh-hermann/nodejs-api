const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'The product name is required']
        },
        quantity: {
            type: Number,
            required: [true, 'The quantity is required'],
            default: 0
        },
        price: {
            type: Number,
            required: [true, 'The price is required']
        },
        image: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
)

const Product = mongoose.model('Product', productSchema)

module.exports = Product