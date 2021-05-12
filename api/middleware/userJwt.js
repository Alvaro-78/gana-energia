const userJwt = () => {

    const payload = {
        userId: auser.id,
        tokenCreationDate: new Date
    }
    
    const token = jwt.sign(payload, secret);
    
};


module.exports = userJwt