// var persons = require('../models/person')
const Person = require('../models/person')

exports.getAllPersons = async(req, res) => {
    try {        
        // Get last person on the list
        const person = await Person.find({}).limit(1).sort({$natural:-1})
        res.send({ person })
    } catch (e) {
        console.log(e)
        res.status(404).send({ error: e.message })
    }
}

exports.addPerson = async(req, res) => {
    try {   
        const person = new Person(req.body)
        await person.save()             
        res.send({ person })
    } catch (e) {
        console.log(e)
        res.status(404).send({ error: e.message })
    }
}