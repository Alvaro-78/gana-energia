const router = require('express').Router();
const userController = require('../controllers/userController');
const User = require('../models/userModel');

// Create User

router.post ('/', async (req, res) => {
    try{
        let user = await userController.createUser(req.body);
        let status = 'User created !';
        return res.json({user, status});
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
});


// Login User

router.post ('/login', async (req, res) => {
    try{
        let email = req.body.email;
        let password = req.body.password;
        let jwt = await userController.login(email, password);
        let token = jwt.token;
        let user = jwt.user;
        let status = 'Success Login !';
        res.json({token, user, status});
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
});

// Search User by Id

router.get ('/:id', async (req, res) => {
    try{
        let id = req.params.id;
        let userId = await userController.userById(id);
        return res.json(userId);
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
});

// // Search All Users

router.get ('/', async (req, res) => {
    try{
        let allUsers = await userController.userAll();
        return res.json(allUsers);
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
});


// Update User

router.put ('/:id', async (req, res) => {
    try{
        let id = req.params.id;
        let user = req.body;
        let userUpdate = await userController.updateUser(id, user);
        let status = 'User updated successfully !';
        res.json({status, userUpdate});
    }catch (error){
        return res.status(500).json({
            message: error.message
        });
    }
});

// // Delete User

router.delete ('/:id', async (req, res) => {
    try{
        let id = req.params.id;
        let userDelete = await userController.deleteUser(id);
        let status = 'User deleted successfully !';
        res.json({status, userDelete});
    }catch (error){
        return res.status(500).json({
            message: error.message
        });
    }
});

// // Delete All

router.delete ('/', async (req, res)  => {

    try{
        let userDelete = await userController.deleteUser();
        let status = 'User deleted successfully !';
        res.json({status, userDelete});
        }catch (error){
        return res.status(500).json({
            message: error.message
        });
    }
});


module.exports = router;