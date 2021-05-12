const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

    userName: {
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
    transform: (doc,ret,opt) => {
        delete ret ['password']
        return ret
    }
}

userSchema.set(toJSONConfig, toJSONConfig);

module.exports = mongoose.model('User', userName);