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

        return  Product.create(product);

    }
       
    // User Can Get All Product

    async productAll() {

        const payload = {
            userId: user.id,
            tokenCreationDate: new Date
        }
    
        const token = jwt.sign(payload, secret);


        return  Product.find();
    };

    // User Can Get Product By Id

    async searchById(id) {

        return Product.findById(id);
    };

    // User Can Update Product

    async update(product, id) {

        return Product.findByIdAndUpdate(id, product, {new: true});
    };

    // User Can Delete Product By Id

    async deleteById(id) {

        return Product.findByIdAndDelete(id);
    };

    // User Can Delete All Product 

    async deleteMany(productAll) {

        return Product.deleteMany(productAll);
    };

};

const productController = new ProductController;
module.exports = productController;