const Admin = require('../models/userModel');
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'password';


class AdminController {
    
    // Create Admin

    async create(admin) {

        admin.password = await bcrypt.hash(admin.password,5)
        return Admin.create(admin);
    };

    // Login Admin

    async login(email, password) {

        const admin = await Admin.findOne({email});
        if(!admin) {
            throw new Error('The email does not exist')
        }
        if(!await bcrypt.compare(password, admin.password)) {
            throw new Error('Wrong password')
        };

        const payload = {
            adminId: admin.id,
            tokenCreationDate: new Date
        }

        const token = jwt.sign(payload, secret);
        return {token, admin}
    };

    // Update Admin

    async udpdate(id, admin) {
        return Admin.findByIdAndUpdate(id, admin)
    };

    // Delete Admin

    async delete(id) {
        return Admin.findByIdAndDelete(id)
    };

    // Delete All Admin

    async deleteAll(allAdmin) {
        return Admin.find(allAdmin)
    };
    
    // Admin can Update Users By Id

    async update(id, user) {
        return User.findByIdAndUpdate(id, user)
    };

    // Admin Get All Users

    async userAll(allUser) {
        return User.find(allUser)
    };

};

const adminController = new AdminController;
module.exports = adminController;