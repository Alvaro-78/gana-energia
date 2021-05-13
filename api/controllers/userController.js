const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'user';
const bcrypt = require('bcryptjs');


class UserController {

    // Create User and Hash password

    async create(user) {
        console.log("dentro del create user")
        const userExist = await User.findOne({user});
        if(userExist) {
            return ''
        }
        user.password = await bcrypt.hash(user.password,5)

        return User.create(user)
    };

    // User Login

    async login(email,password) {

        const user = await User.findOne({email});
        if(!user) {
            throw new Error('The email does not exist')
        }
        if(!await bcrypt.compare(password,user.password)) {
            throw new Error('Wrong password')
        };

        const payload = {
            userId: user.id,
            tokenCreationDate: new Date
        }
    
        const token = jwt.sign(payload, secret);
        
        return {token, user}

    };

    // Update User

    async update(id,user) {

        const payload = {
            userId: user.id,
            tokenCreationDate: new Date
        }
    
        const token = jwt.sign(payload, secret);
        const userUpdate = User.findByIdAndUpdate(id,user);
            
        return {token, userUpdate}
    };

    // Delete one User

    async delete(id) {

        const payload = {
            userId: user.id,
            tokenCreationDate: new Date
        }
    
        const token = jwt.sign(payload, secret);
        const userDelete = User.findByIdAndDelete(id)

        return {token, userDelete}
    };

   
    // // Admin Can Search User By Id

    // async searchById(id) {

    //     const getUserById = User.findById(id)
    //     return {userJwt, getUserById}
    // };


    //   // Admin Get All Users

    // async userAll() {

    //     const userGetAllUser = User.find()
    //     return {userJwt, userGetAllUser}
    // };
};

const userController = new UserController;
module.exports = userController;