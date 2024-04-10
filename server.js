const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/productModel');
const productRoute = require('./routes/productRoute');
const errorMiddleWare = require('./middlewares/errorMiddleware');
require('dotenv').config()

const app = express();

const port = 5000;
const MONGODB_URL= process.env.MONGODB_URL;

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/v1/products', productRoute)

app.get('/', (req, res)=>{
    res.send('Hello World')
})

app.use(errorMiddleWare)


mongoose.set('strictQuery', false)
const connectDB = async ()=>{
    await mongoose.connect(MONGODB_URL)
    .then(()=>{
        console.log('Connected to MongoDB.');    
    }).catch((error)=>{
        console.log(error);
    })
}

app.listen(port, ()=>{
    connectDB();
    console.log(`Server running on port: ${port}`);
})

