const {User} = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = process.env.ACCESS_TOKEN

function signUp(req, res){
    const email = req.body.email;

    User.findOne({where: {email:email}})
    .then(result => {

        if(result){
            res.status(403);
            return res.json({
                message: 'Email Already Exist',
                user: req.body.email
            });
    
        }else{
    
            bcryptjs.genSalt(14, (err, salt) => {
                bcryptjs.hash(req.body.password, salt, (err, hashed) => {
        
                    const user = {
                        name: req.body.name,
                        email: req.body.email,
                        password: hashed,
                        role: req.body.role
                    }
                
                    User.create(user)
                    .then(result => {
                        res.status(201).json({
                            message: 'Success',
                            result: result
                        })
                    }).catch(err => {
                        res.status(400).json({
                            message: 'Something went wrong',
                            err
                        })
                    })
                })
            })
        }
    
    }).catch(err =>{
        res.status(400).json({
            message: 'Something went wrong',
            err
        })
    })
    
};

function login(req, res){
    const email = req.body.email;
    const role = 22;

    User.findOne({where: {email}})
    .then(user => {
        if(user === null){
            res.status(401).json({
                message: 'Invalid Credentials',
                user: req.body.email
            })
        }else{
            bcryptjs.compare(req.body.password, user.password, (err, result) => {
                if(result){
                    const token = jwt.sign({email:user.email, role:user.role}, secret, (err, token) => {
                        res.json({
                            message: 'Authentication Successful',
                            token: token
                        })
                        
                    } )
                } else {
                    res.status(400).json({
                        message: 'Something went wrong',
                        err
                    })  
                }
            })
        }
    }).catch(err => {
        res.status(400).json({
            message: 'Something went wrong',
            err
        })  
    })
}
module.exports = {
    signUp,
    login
}