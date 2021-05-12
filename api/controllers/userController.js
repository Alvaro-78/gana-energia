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

        const token = jwt.sign(paylord, secret);
        return {token, user}

    };

    // Update

    async update(id,user) {
        return User.findByIdAndUpdate(id,user)
    };

    // Delete one User

    async delete(id) {
        return User.findByIdAndDelete(id)
    };

    // Delete All

    async deleteAll(deleteUser) {
        return User.deleteMany(deleteUser)
    };

    // Get All Users

    async userAll(allUser) {
        return User.find(allUser)
    };

    async searchById(id) {
        return User.findById(id)
    };

};

const userController = new UserController;
module.exports = userController;