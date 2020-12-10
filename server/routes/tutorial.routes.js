module.exports = app => {
    //grab tutorial controller
    const tutorials = require('../controllers/tutorial.controller.js')

    let router = require('express').Router()

    //Create new tutorial
    router.post('/', tutorials.create)

    //Retrieve all tutorials
    router.get('/', tutorials.findAll)

    //Retrieve all published tutorials
    router.get('/published', tutorials.findAllPublished)

    //Retrieve single tutorial by ID
    router.get('/:id', tutorials.findOne)
    
    
    //Update tutorial with id
    router.put('/:id', tutorials.update)

    
    //Delete tutorial
    router.delete('/:id', tutorials.delete)

    //Search by keyword
    router.get('api/tutorials?title=[kw]', tutorials.findByKeyword)

    app.use('/api/tutorials', router)
}