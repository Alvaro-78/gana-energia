const router = require('express').Router();
const userController = require('../controllers/userController');
const User = require('../models/userModel');

// Create User

const createHandler = async (req, res) => {

    try {
        const newUser = new User(req.body);
        const result = await userController.create(newUser);
        res.json({result, date: new Date});
    } catch (error) {
        console.log(error)
    }
};

// Login User

const loginHandler = async (req, res) => {

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
        const result = await userController.deleteMany();
        res.json({result, date: new Date});
    } catch (error) {
        console.log(error)
    }
};

// Search User by Id

const adminSearchByIdHandler = async (req, res) => {

    try {
        const id = req.params.id;
        const result = await userController.searchById(id);
        res.json({result, date: new Date});
    } catch (error) {
        console.log(error)
    }
};

// Search All Users

const adminIndexAllUserHandler = async (req, res) => {

    try {
        const result = await userController.userAll();
        console.log(result)
        res.json({result, date: new Date});
    } catch (error) {
        console.log(error)
    }
};



router.post('/', createHandler);
router.post('/login', loginHandler);
router.get('/:id', adminSearchByIdHandler);
router.get('/', adminIndexAllUserHandler);
router.put('/:id', updateHandler);
router.delete('/:id', deleteHandler);
router.delete('/', deleteAllUserHandler);


module.exports = router;