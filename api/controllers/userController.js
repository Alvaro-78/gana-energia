const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'user';
const bcrypt = require('bcryptjs');


class UserController {

    // Create User and Hash password

    async createUser(user) {
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

        const user =  await User.findOne({email});
        if(!user){
            throw new Error('The email does not exist')
        }
        if(!await bcrypt.compare(password,user.password)){
            throw new Error('Wrong password')
        };
    
        const payload = {
            userId: user.id,
            tokenCreationDate: new Date,
        }
    
        const token = jwt.sign(payload, secret);
        return {token, user};
        
    };

    // Update User

    async updateUser(id,user) {
     
        return User.findByIdAndUpdate(id, user, {new:true})
    };

    
    
    //  Search User By Id
    
    async searchById(id) {
        
        return User.findById(id)
    };
    
    
    //  All Users
    
    async userAll() {
        
        return User.find()
    };

    // Delete one User

    async deleteUser(id) {

        return User.findByIdAndDelete(id)
    };
};

const userController = new UserController;
module.exports = userController;