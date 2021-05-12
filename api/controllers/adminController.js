const Admin = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'admin';


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

        const payload = {
            adminId: admin.id,
            tokenCreationDate: new Date
        }

        const token = jwt.sign(payload, secret);
        const adminUpdate = Admin.findByIdAndUpdate(id, admin)
        return {token, adminUpdate}
    };

    // Delete Admin

    async delete(id) {

        const payload = {
            adminId: admin.id,
            tokenCreationDate: new Date
        }

        const token = jwt.sign(payload, secret);
        const adminDelete = Admin.findByIdAndDelete(id)

        return {token, adminDelete}
    };

    // Delete All Admin

    async deleteAll(allAdmin) {

        const payload = {
            adminId: admin.id,
            tokenCreationDate: new Date
        }

        const token = jwt.sign(payload, secret);
        const adminDeleteAll = Admin.find(allAdmin)
        return {token,adminDeleteAll}
    };
    

};

const adminController = new AdminController;
module.exports = adminController;