const router = require('express').Router();
const ProductController = require('../controllers/productController');
const Product = require('../models/productModel');


// User Create Product

const createHandler = async (req, res)  => {

    try {
        const newProduct = new Product(req.body);
        const result = await ProductController.create(newProduct);
        res.json({result, date: new Date});
    } catch (error) {
        console.log(error)
    }
};

// User Can Search All Product

const searchAllHandler = async (req, res ) => {

    try {
        const result = await ProductController.productAll();
        res.json({result, date: new Date});
    } catch (error) {
        console.log(error)
    }
};

// User Can Search By Id

const seacrhByIdHandler = async (req, res) => {

    try {
        const id = req.params.id;
        const jwt = await ProductController.searchById(id);
        const token = jwt.token;
        const user = jwt.user;
        res.json({token, user, date: new Date});
    } catch (error) {
        console.log(error)
    }
};

// User Can Update Product

const updateHandler = async(req, res) => {
console.log("update",res)
    try {
        const updateProduct = req.body;
        const id = req.params.id;
        const result = await ProductController.update(id, updateProduct)
        res.json({result, date: new Date});
    } catch (error) {
        console.log(error)
    }
};


// User Can Delete Product By Id

const deleteByIdHandler = async (req, res) => {

    try {
        const id = req.params.id;
        const result = await ProductController.deleteById(id);
        console.log(req);
        console.log(ProductController.deleteById,"ieeeeeeeeeeeeeeeee")
        res.json({result, date: new Date});
        console.log(result,"IEEEEEEEE")
    } catch (error) {
        console.log(error)
    }
};

// User Can Delete All Product

const deleteAllHandler = async (req, res) => {

    try {
        const result = await ProductController.deleteMany();
        res.json({result, date: new Date});
    } catch (error) {
        console.log(error)
    }
};


router.post('/', createHandler);
router.get('/', searchAllHandler);
router.get('/:id', seacrhByIdHandler);
router.put('/:id', updateHandler);
router.delete('/:id', deleteByIdHandler);
router.delete('/', deleteAllHandler);

module.exports = router;