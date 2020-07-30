require('dotenv').config();
const mongoose = require('mongoose');

const url = process.env.MONGOURL;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        console.log('Connected to MongoDB')
    })
    .catch(error =>{
        console.log('Error happened when connecting to MongoDB:', error.message)
    });

const personSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true, 
        unique: true,
        minlength:3
    },
    number: {
        type: String, 
        required: true, 
        unique: true,
        minlength:8

    },
});

const uniqueValidator = require('mongoose-unique-validator')
mongoose.set('useFindAndModify', false);
//fixing deprecated warning
personSchema.plugin(uniqueValidator)
mongoose.set('useCreateIndex', true);

    personSchema.set('toJSON', {
        transform: (document, returnedObject) => {
          returnedObject.id = returnedObject._id.toString()
          delete returnedObject._id
          delete returnedObject.__v
        }
    })

module.exports = mongoose.model('Person',personSchema)