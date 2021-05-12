const Product = require('../models/productModel');
const userJwt = require('../middleware/userJwt')


class ProductController {

    // User Create Product

    async create(product) {

        const userCreateProduct = Product.create(product);
        return {userJwt, userCreateProduct}

    };   

    // User Can Get All Product

    async productMany(allProduct) {
        
        const userGetAllProducts = Product.find(allProduct);
        return {userJwt, userGetAllProducts}
    };

    // User Can Get Product By Id

    async searchById(id) {

        const userGetProductById = Product.findById(id);
        return { userJwt, userGetProductById}
    }

    // User Can Update Product

    async update(product) {

        const userUpdateProduct = Product.create(product);
        return{userJwt, userUpdateProduct}
    };

    // User Can Delete Product By Id

    async deleteById(id) {

        const userCanDeleteById = Product.findByIdAndDelete(id);
        return {userJwt, userCanDeleteById}
    };

    // User Can Delete All Product 

    async deleteMany(productAll) {

        const userCanDeleteAllProduct = Product.deleteMany(productAll);
        return {userJwt, userCanDeleteAllProduct}
    };

};

const ProductController = new ProductController;
module.exports = productController;