const router = require('express').Router();
const ProductController = require('../controllers/productController');
const Product = require('../models/productModel');


// User Create Product

router.post('/', async (req, res)  => {

    try {
        const newProduct = new Product(req.body);
        const result = await ProductController.create(newProduct);
        res.json({result, date: new Date});
    } catch (error) {
        console.log(error)
    }
});

// User Can Search All Product

router.get('/', async (req, res ) => {

    try {
        const result = await ProductController.productAll();
        res.json({result, date: new Date});
    } catch (error) {
        console.log(error)
    }
});

// User Can Search By Id

router.get('/:id', async (req, res) => {

    try {
        const id = req.params.id;
        const jwt = await ProductController.searchById(id);
        const token = jwt.token;
        const user = jwt.user;
        res.json({token, user, date: new Date});
    } catch (error) {
        console.log(error)
    }
});

// User Can Update Product

router.put('/:id', async(req, res) => {
console.log("update",res)
    try {
        const updateProduct = req.body;
        const id = req.params.id;
        const result = await ProductController.update(id, updateProduct)
        res.json({result, date: new Date});
        console.log(res.json,"YEEEEEEEEEEEEEEEEEEEEEEEEEEE")
    } catch (error) {
        console.log(error)
    }
});


// User Can Delete Product By Id

router.delete('/:id',  async (req, res) => {

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
});

// User Can Delete All Product

router.delete('/', async (req, res) => {

    try {
        const result = await ProductController.deleteMany();
        res.json({result, date: new Date});
    } catch (error) {
        console.log(error)
    }
});


module.exports = router;