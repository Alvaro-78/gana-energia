const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const adminSchema = new Schema({

    adminName: {
        type: String,
        unique: true
    },

    email: {
        type: String,
        unique: true
    },

    password: String

});

const toJSONConfig = {

    transform: (doc, res, opt) => {
        delete ret ['password']
        return ret
    }
};

adminSchema.set('toJson', toJSONConfig);
module.exports = mongoose.model('Admin', adminSchema);
