const Product = require('../models/porductModel');
const userJwt = require('../middleware/userJwt')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'password';


class ProductController {

    // User Create Product

    async create(product) {

        // const payload = {
        //     userId: auser.id,
        //     tokenCreationDate: new Date
        // }

        // const token = jwt.sign(payload, secret);
        const userCreateProduct = Product.create(product);
        return {userJwt, userCreateProduct}

    };   

    // User can Update Product

    async update(product) {

        const payload = {
            userId: auser.id,
            tokenCreationDate: new Date
        }

        const token = jwt.sign(payload, secret);
        const userUpdateProduct = Product.create(product);
        return
    }




}    