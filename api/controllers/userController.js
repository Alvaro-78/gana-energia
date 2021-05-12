const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'password';

class UserController {

    // Create User and Hash password

    async create(user) {
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
            tokenCreationDate: new Date,
        }

        const token = jwt.sign(payload, secret);
        return {token, user}

    };

    // Update

    async update(id,user) {

        const payload = {
            userId: user.id,
            tokenCreationDate: new Date,
        }

        const token = jwt.sign(payload, secret);
        const userUpdate = User.findByIdAndUpdate(id,user)
        return {token, userUpdate}
    };

    // Delete one User

    async delete(id) {

        const payload = {
            userId: user.id,
            tokenCreationDate: new Date,
        }

        const token = jwt.sign(payload, secret);
        const userDelete = User.findByIdAndDelete(id)

        return {token, userDelete}
    };

    // Delete All

    async deleteAll(deleteUser) {

        const payload = {
            userId: user.id,
            tokenCreationDate: new Date,
        }

        const token = jwt.sign(payload, secret);
        const userDeleteAll = User.deleteMany(deleteUser)

        return {token, userDeleteAll}
    };

    // Get All Users

    async userAll(allUser) {

        const payload = {
            userId: user.id,
            tokenCreationDate: new Date,
        }

        const token = jwt.sign(payload, secret);
        const getAllUser = User.find(allUser)
        return {token, getAllUser}
    };

    async searchById(id) {

        const payload = {
            userId: user.id,
            tokenCreationDate: new Date,
        }

        const token = jwt.sign(payload, secret);
        const getUserById = User.findById(id)
        return {token, getUserById}
    };

};

const userController = new UserController;
module.exports = userController;