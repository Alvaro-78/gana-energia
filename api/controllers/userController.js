const User = require('../models/userModel');
const userJwt = require('../middleware/userJwt')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'user';

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
        
        return {userJwt, user}

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

   
    // Admin Can Search User By Id

    async searchById(id) {

        const payload = {
            adminId: admin.id,
            tokenCreationDate: new Date,
        }

        const token = jwt.sign(payload, secret);
        const getUserById = User.findById(id)
        return {token, getUserById}
    };


      // Admin Get All Users

      async userAll(allUser) {

        const payload = {
            adminId: admin.id,
            tokenCreationDate: new Date
        }

        const token = jwt.sign(payload, secret);
        const adminGetAllUser = User.find(allUser)
        return {token, adminGetAllUser}
    };
};

const userController = new UserController;
module.exports = userController;