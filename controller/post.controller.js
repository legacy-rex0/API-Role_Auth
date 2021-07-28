const {Post} = require('../models')


function create(req, res){
    const post = {
        title: req.body.title,
        content: req.body.content,
        description: req.body.description,
        contact: req.body.contact
    }
    Post.create(post)
    .then(result => {
        res.status(201).json({
            message: 'Posts Created Sucessfully',
            post: result
        })
    }).catch(err => {
        res.status(400).json({
            message: 'Something went Wrong',
            error: err
        })
    })
}

function read(req, res){
    Post.findAll()
    .then(result => {
        res.json({
            message: 'Success',
            result,
        })
    }).catch(err => {
        message: 'Something Went Wrong',
        err

    })
}

function fetch(req, res){
    const id = req.params.id;

    Post.findByPk(id)
    .then(result => {
        res.json({
        message: 'Success',
        result
        })
    }).catch(err => {
        res.status(400).json({
            message: 'Something went wrong',
            err
        })
    })
}

function update(req, res){
    const id = req.params.id;

    const newUpdate = {
        title: req.body.title,
        content: req.body.content,
        description: req.body.description,
        contact: req.body.contact
    }

    Post.update(newUpdate, {where: {id}})
    .then(result => {
        res.status(201).json({
            message: 'Success',
            result: newUpdate
        })
    }).catch(err => {
        res.status(400).json({
            message: 'Something went wrong',
            err
        })
    })
};

function destroy(req, res){
    const id =  req.params.id;
    const post = Post.findByPk({where: {id}});
    Post.destroy({where: {id}})
    .then(result => {
        res.json({
            message: 'Success',
            result: post.title, result
        })
    }).catch(err => {
        res.status(400).json({
            message: 'Something went wrong',
            err
        })
    })
}


module.exports = {
    create,
    fetch,
    read,
    update,
    destroy,
}