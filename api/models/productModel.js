const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const productSchema = new Schema({
    
    productName: String,
    category: String,
    price: String,
    description: String,
    picture: String
})

const Product = mongoose.model('Product', productSchema);
module.exports = Product;