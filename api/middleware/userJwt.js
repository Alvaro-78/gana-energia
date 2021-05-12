const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'user';

const userJwt = () => {

    const payload = {
        userId: auser.id,
        tokenCreationDate: new Date
    }
    
    const token = jwt.sign(payload, secret);
    
};


module.exports = userJwt