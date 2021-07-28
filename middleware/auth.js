const jwt = require('jsonwebtoken');
const {User, Post} = require('../models');
const secret = process.env.ACCESS_TOKEN;

function tokenAuth(req, res, next){

    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, secret);
        req.dataToken = decodedToken
        console.log(req.dataToken.role)
        next()

    } catch (error) {
        return res.status(403).json({
            message: 'Invalid and Expired Token Provided',
            error: error
        })
        
    }
};

function roleAuth(role){
    return(req, res, next) => {
        if(role !== req.dataToken.role){
            return res.status(403).json({
                message: 'Unathorized Access!',
                user: req.dataToken.email
            });
        }
        next();
    }
}

module.exports = {
    tokenAuth,
    roleAuth,
}