require('dotenv').config;
const mongoose = require('mongoose');


if (process.argv.length < 3) {
    console.log('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1)
  }

const password = process.argv[2]
const personName = process.argv[3]
const personNumber = process.argv[4]

const url = `mongodb+srv://admin:${password}@cluster0.swkxw.mongodb.net/phonebook?retryWrites=true&w=majority`;

mongoose.connect(url, { useNewUrlParser: true});

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
});

const Person = mongoose.model('Person',personSchema);

const person =  new Person({
    name: personName,
    number: personNumber
});
if (personNumber && personName) {
    person.save().then(result => {
        console.log('Added ' +  personname + ' number ' + personNumber + ' to phonebook');
        mongoose.connection.close();
    })
} else {
    Person.find({}).then(persons => {
        console.log('phonebook:')
        persons.forEach(p => {
            console.log(p.name + " " +p.number)
            
        })
        mongoose.connection.close();
    })
}

