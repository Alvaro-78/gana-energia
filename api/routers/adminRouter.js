const router = require('express').Router();
const adminController = require('../controllers/adminController');
const userController = require('../controllers/userController');
const Admin = require('../models/adminModel');

// Create Admin

const createHandler = async (req, res) => {

    try {
        const newAdmin = new Admin(req.body);
        const result = await adminController.create(newAdmin);
        res.json({result, date: new Date});
    } catch (error) {
        console.log(error)
    };
};

// Login Admin

const loginHandler = async (req, res) => {

    try {
        const {email, password} = req.body;
        const jwt = jwt.token;
        const token = jwt.token;
        const admin = jwt.admin;
        res.json({token, admin, date: new Date});
    } catch (error) {
        return res.status(401).json({
            message: error.message
        })
    }
};

// Update Admin

const updateHandler = async (req, res) => {

    try {
        const updateAdmin  = req.body;
        const id = req.params.id;
        const result = await adminController.update(id, updateAdmin);
        res.json({result, date: new Date});
    } catch (error) {
        console.log(error)
    }
};

// Delete Admin 

const deleteHandler = async (req, res) => {

    try {
        const id = req.params.id;
        const rsult = await adminController.delete(id);
        res.json({result, date: new Date});
    } catch (error) {
        console.log(error)
    }
};

// Delete All Admin

const deleteAllHandler = async (req,res) => {

    try {
        const result = await adminController.deleteAll();
        res.json({result, date: new Date});
    } catch (error) {
        console.log(error)
    }
};

// Admin can Search User by Id

const adminSearchByHandler = async (req, res) => {

    try {
        const id = req.params.id;
        const result = await userController.searchById(id);
        res.json({result, date: new Date});
    } catch (error) {
        console.log(error)
    }
};

// Admin can search All Users

const AdminIndexAllUserHandler = async (req, res) => {

    try {
        const result = await userController.userAll();
        res.json({result, date: new Date});
    } catch (error) {
        console.log(error)
    }
};

router.post('/', createHandler);
router.post('/login', loginHandler);
router.get('/:id', adminSearchByHandler);
router.get('/', AdminIndexAllUserHandler);
router.put('/:id', updateHandler);
router.delete('/', deleteHandler);
router.delete('/:id', deleteAllHandler);


module.exports = router;