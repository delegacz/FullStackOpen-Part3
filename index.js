const express = require('express')
const { response, request } = require('express')
const app = express()
const morgan = require('morgan')
app.use(express.json())

const cors = require('cors')
app.use(express.static('build'))

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


let persons = [
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
    response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    if(person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.post('/api/persons/', (request, response)=> {
    const person = request.body
    const name = request.body.name
    const number = request.body.number
    const match = persons.find(p => p.name == name || p.number == number)
    if (match) {
       return response.status(400).json({error: 'Name and number must be unique'})
    } else {
        person.id = generateID()
        persons = persons.concat(person)
        response.json(person)
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
    response.status(204).end()
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
}) 