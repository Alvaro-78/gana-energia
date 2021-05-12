const router = require('express').Router();
const { searchById } = require('../controllers/userController');
const userController = require('../controllers/userController');
const User = require('../models/userModel');

// Create User

const createHandler = async(req, res) => {

    try {
        const newUser = new User(req.body)
        const result = await userController.create(newUser)
        res.json({result, date: newDate});
    } catch (error) {
        console.log(error)
    }
};

// Login User

const loginHandler = async(req, res) => {

    try {
        const {email, password} = req.body;
        const jwt = await userController.login(email, password);
        const token = jwt.token;
        const user = jwt.user;
        res.json({token, user, date: new Date});
    } catch (error) {
        return res.status(401).json({
            message: error.message
        })
    }
};

// Update User

const updateHandler = async (req,res) => {

    try {
        const updateUser = req.body;
        const id = req.params.id;
        const result = await userController.update(id, updateUser);
        res.json({result, date: new Date});
    } catch (error) {
        console.log(error)
    }
};

// Delete User

const deleteHandler = async (req, res) => {

    try {
        const id = req.params.id;
        const result = await userController.delete(id);
        res.json({result, date: new Date});
    } catch (error) {
        console.log(error)
    }
};

// Delete All

const deleteAllUserHandler = async (req, res) => {

    try {
        const result = await userController.deleteAll();
        res.json({result, date: new Date});
    } catch (error) {
        console.log(error)
    }
};

// Search All users 

const userAllHandler = async (req, res) => {

    try {
        const result = await userController.userAll();
        res.json({result, date: new Date});
    } catch (error) {
        console.log(error)
    }
};

// Search User By Id

const searchByIdHandler = async (req, res) => {

    try {
        const id = req.params.id;
        const result = await userController.searchById(id);
    } catch (error) {
        console.log(error)
    }
};

router.post('/', createHandler);
router.post('/login', loginHandler);
router.get('/', userAllHandler);
router.get('/:id', searchByIdHandler);
router.update('/:id', updateHandler);
router.delete('/:id', deleteHandler);
router.delete('/', deleteAllUserHandler);


module.exports = router;