const router = require('express').Router();
const ProductController = require('../controllers/productController');
const Product = require('../models/productModel');


// User Create Product

const createHandler = async (req, res) => {

    try {
        const newProduct = new Product(req.body);
        const result = await ProductController.create(newProduct);
        res.json({result, date: new Date});
    } catch (error) {
        console.log(error)
    }
};

// User Can Search All Product

const productAllHandler = async (req, res ) => {

    try {
        const result = await ProductController.productMany();
        res.json({result, date: new Date});
    } catch (error) {
        console.log(error)
    }
};

// User Can Search By Id

const searchByIdHandler = async (req, res) => {

    try {
        const id = req.params.id;
        const result = await ProductController.searchById(id);
    } catch (error) {
        console.log(error)
    }
};

// User Can Update Product

const updateHandler = async(req, res) => {

    try {
        const updateProduct = req.body;
        const id = req.params.id;
        res.json({result, date: new Date});
    } catch (error) {
        console.log(error)
    }
};

// User Can Delete Product By Id

const deleteHandler = async (req, res) => {

    try {
        const id = req.params,id;
        const result = await ProductController.delete(id);
        res.json({result, date: new Date});
    } catch (error) {
        console.log(error)
    }
};

// User Can Delete All Product

const deleteAllProductHandler = async (req, res) => {

    try {
        const result = await ProductController.deleteMany();
        res.json({result, date: new Date});
    } catch (error) {
        console.log(error)
    }
};

router.post('/', createHandler);
router.get('/', productAllHandler);
router.get('/:id', searchByIdHandler);
router.put('/:id', updateHandler);
router.delete('/:id', deleteHandler);
router.delete('/', deleteAllProductHandler);