const db = require('../models')
//grab Tutorial model from models index
const Tutorial = db.tutorials

//create and save new tutorial
exports.create = (req, res) => {
    //validate request
    if(!req.body.title){
        res.status(400).send({message: 'Title cannot be empty'})
        return
    }
    //create a tutorial
    const tutorial = new Tutorial({
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    })
    //save Tutorial to database
    tutorial
        .save(tutorial)
        .then((data) => {
            res.send(data)//see what we created
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || 'An error message ocurred while creating tutorial'
            })
        })
}

//retrieve all tutorials
exports.findAll = (req, res) => {
    //find Tutorial models
    Tutorial.find()
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || 'An error occurred while retrieving tutorials'
            })
        })
}

//find a single tutorial with an id
exports.findOne = (req, res) => {
    //save id to search for in a variable
    const id = req.params.id
    //res.send(id)
    
    //find tutorial with corresponding ID
    Tutorial.findById(id)
        .then((data) => {
            if(!data) {
                return res.status(400).send({message: "Did not find tutorial with id" + id})
            } else {
                res.send(data)
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || 'An error occurred while retrieving tutorials'
            })
        })
}

//update tutorial with corresponding id
exports.update = (req, res) => {
    //save id to search for in a variable
    const id = req.params.id
    console.log(req.body)
    //res.send(id)

    Tutorial.findByIdAndUpdate(id, {title: req.body.title, description: req.body.description})
        .then((data) => {
            res.send(data)
        }
        )
        .catch((err) => {
            res.status(500).send({
                message: err.message || 'An error occurred while retrieving tutorials'
            })
        })
}

//delete tutorial with corresponding id
exports.delete = (req, res) => {
    //save id to search for in a variable
    const id = req.params.id

    Tutorial.findByIdAndRemove(id, {useFindAndModify: false})
        .then((data) => {
            res.send('Entry deleted')
        })
        .catch((err) => {
            console.log(err)
            res.status(500).send({
                message: err.message || 'An error occurred while retrieving tutorials'
            })
        })
}

//retrieve all published tutorials
exports.findAllPublished = (req, res) => {
    //save id to search for in a variable
    const id = req.params.id

    Tutorial.find({published: true})
        .then((data) => {
            if(!data) {
                res.send('No published tutorials')
            } else {
                res.send(data)
            }
        })
        .catch((err) => {
            console.log(err)
            res.status(500).send({
                message: err.message || 'An error occurred while retrieving tutorials'
            })
        })
}

//retrieve tutorials with keyword
exports.findByKeyword = (req, res) => {
    console.log(req.params)
}