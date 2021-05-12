const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const productSchema = new Schema({
    
    productName: String,
    category: String,
    price: String,
    description: String
})

productSchema.set('toJSON', toJSONConfig);
module.exports = mongoose.model('Product', productSchema);