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

//Error Next Middleware
const errorHandler = (error, request, response, next) => {
    console.error(error.message)
    if(error.name === 'CastError') {
        return response.status(400).send({error: 'malformatted id'})
    }
    next(error)
}
app.use(errorHandler)


/*Checking for if user exists in db*/
const alreadyExist = (name, request) => {
    if(name===request.body.name) {
        console.log(request.body.name, 'exists')
        return true
    }else{
        return false
    }
}
/*let persons = [
    { 
        "name": "Arto Hellas", 
        "number": "040-123456",
        "id": 1
      },
      { 
        "name": "Ada Lovelace", 
        "number": "39-44-5323523",
        "id": 2
      },
      { 
        "name": "Dan Abramov", 
        "number": "12-43-234345",
        "id": 3
      },
      { 
        "name": "Mary Poppendieck", 
        "number": "39-23-6423122",
        "id": 4
      }
]
*/
const generateID = () => {
    return Math.floor(Math.random()*Math.floor(10000))
}

app.get('/', (request, response) => {
    response.send(`<h1>Hello World</h1>`)
})

app.get('/info', (request, response) => {
    let date = new Date()
    response.send(`Phonebook has records for ${persons.length} people <br> ${date}`)
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


app.post('/api/persons/', (request, response)=> {
    const pname = request.body.name
    const pnumber = request.body.number
    const person = new Person({
        name: pname,
        number: pnumber,
        id: generateID()
    })
    person.save().then(savedPerson => savedPerson.toJSON()).then(savedPersoninJSON => {
        response.json(savedPersoninJSON)
        console.log('entry saved to databse')
    })                
})

app.put('/api/persons/:id', (request, response, next) => {
    const body = request.body
  
    const person = {
      name: body.name,
      number: body.number,
    }
  
    Person.findByIdAndUpdate(request.params.id, person, { new: true })
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

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
}) 