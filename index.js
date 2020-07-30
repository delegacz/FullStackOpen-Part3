const express = require('express')
const { response, request } = require('express')
const app = express()
const morgan = require('morgan')

app.use(express.static('build'))
app.use(express.json())

const cors = require('cors')


app.use(cors())
app.use(morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'), '-',
      tokens['response-time'](req, res), 'ms',
      JSON.stringify(req.body)
    ].join(' ')
}))

const Person = require('./models/person');
const { mongoose } = require('mongoose')
const person = require('./models/person')




const generateID = () => {
    return Math.floor(Math.random()*Math.floor(10000))
}




app.get('/', (request, response) => {
    response.send(`<h1>Hello World</h1>`)
})

app.get('/info', (request, response) => {
    Person.find().exec(function (err, results) {
        let date = new Date()
        var count = results.length
        response.send(`Phonebook has records for ${count} people <br> ${date}`)
    });   
})

app.get('/api/persons', (request, response) => {
    Person.find({}).then(person => {
        response.json(person)
    })
})

app.get('/api/persons/:id', (request, response, next) => {
    Person.findById(request.params.id).then(
        person => {
            if(person) {
                response.json(person)
            } else {
                response.status(404).end()
            }
        }).catch(error => next(error))
})


app.post('/api/persons/', (request, response, next)=> {
    const pname = request.body.name
    const pnumber = request.body.number
    const person = new Person({
        name: pname,
        number: pnumber,
        id: generateID()
    })

    person.save().then(savedPerson => { response.json(savedPerson.toJSON())
    }).catch(error => next(error))            
})

app.put('/api/persons/:id', (request, response, next) => {
    const body = request.body
  
    const person = {
      name: body.name,
      number: body.number,
    }
    updateOptions = {
        new: true,
        runValidators: true
    }
    Person.findByIdAndUpdate(request.params.id, person, updateOptions )
      .then(updatedPerson => {
        response.json(updatedPerson)
      })
      .catch(error => next(error))
  })

app.delete('/api/persons/:id', (request, response) => {
    Person.findByIdAndRemove(request.params.id).then(result=>{
        response.status(204).end()
        console.log(request.params.id) 
    })
})

//Error Next Middleware
const errorHandler = (error, request, response, next) => {
    console.log('error name: ', error.name)
    if(error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id'})
    } else if (error.name == 'ValidationError') {
        return response.status(400).json({ error: error.message })
    }
    next(error)
}
app.use(errorHandler)


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
}) 