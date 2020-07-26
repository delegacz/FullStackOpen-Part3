require('dotenv').config();
const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
});

personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
})

const url = process.env.MONGOURL;


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(result => {
        console.log('Connected to MongoDB')
    })
    .catch(error =>{
        console.log('Error happened when connecting to MongoDB:', error.message)
    });




module.exports = mongoose.model('Person',personSchema)