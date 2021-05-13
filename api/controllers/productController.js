const Product = require('../models/productModel');
const user = require('../models/userModel');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'user';


class ProductController {

    // User Create Product

    async create(product) {

        const productExist = await Product.findOne({product});
        if(productExist) {
            return ''
        }

        const payload = {
            userId: user.id,
            tokenCreationDate: new Date
        }
    
        const token = jwt.sign(payload, secret);
        const userCreateProduct = Product.create(product);

        return {token, userCreateProduct}
    };   

    // User Can Get All Product

    async productAll() {

        const userGetAllProducts = Product.find();

        return  userGetAllProducts
    };

    // User Can Get Product By Id

    async searchById(id) {

        const userGetProductById = Product.findById(id);

        return {token, userGetProductById}
    };

    // User Can Update Product

    async update(product, user) {

        const userUpdateProduct = Product.findByIdAndUpdate(product);

        return{token, userUpdateProduct}
    };

    // User Can Delete Product By Id

    async deleteById(id) {

        const userCanDeleteById = Product.findByIdAndDelete(id);

        return {token, userCanDeleteById}
    };

    // User Can Delete All Product 

    async deleteMany(productAll) {

        const userCanDeleteAllProduct = Product.deleteMany(productAll);

        return {token, userCanDeleteAllProduct}
    };

};

const productController = new ProductController;
module.exports = productController;