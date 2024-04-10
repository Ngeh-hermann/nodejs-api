const Product = require('../models/productModel')
const asyncHandler = require('express-async-handler')


const createProduct = asyncHandler(async(req, res)=>{
    try {
        const products = await Product.create(req.body)
        res.status(200).json(products)
    } catch (error) {
        console.log(`Error while creating product: ${error.message}`);
        res.status(500);
        throw new Error(error.message)
    }
})

const getAllProducts = asyncHandler(async(req, res)=>{
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        console.log(`Product fetching error: ${error.message}`);
        res.status(500);
        throw new Error(error.message)
    }
})

const getProduct = asyncHandler(async(req, res)=>{
    try {
        const {id} = req.params
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        console.log(`Error while fetching a single product ${error.message}`);
        res.status(500);
        throw new Error(error.message)

    }
})

const updateProduct =  asyncHandler(async(req, res)=>{
    try {
        const {id} = req.params
        const product = await Product.findByIdAndUpdate(id, req.body)
        
        if(!product){
            return res.status(404).json({message: `Cannot find product with ID: ${id}`})
        }
        
        const updatedProduct = await Product.findById(id)
        res.status(200).json(updatedProduct)


    } catch (error) {
        console.log(`Error while updating product: ${error.message}`);
        res.status(500);
        throw new Error(error.message)
    }
})

const deleteProduct = asyncHandler(async(req, res)=>{
    try {
        const {id} = req.params
        const product = await Product.findByIdAndDelete(id)
        if(!product){
            return res.status(404).json({message: `Cannot find product with ID: ${id}`})
        }
        res.status(200).json({message: 'Product Deleted successfully'})
    } catch (error) {
        console.log(`Error while deleting product: ${error.message}`);
        res.status(500);
        throw new Error(error.message)
    }
})


module.exports = {
    createProduct,
    getAllProducts,
    getProduct,
    updateProduct,
    deleteProduct
}