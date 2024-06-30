const mongoose = require('mongoose');
const connect = mongoose.connect('mongodb://localhost:27017/login');
const { type } = require('os');
const { stringify } = require('querystring');
mongoose.set("strictQuery", false);

// check db connection
connect.then(() => {
    console.log("Database connected Successfully")
})
.catch(() => {
    console.log("Database cannot be connected")
})


// creating a schema
const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true

    }
})

// collection part
const collection = new mongoose.model('users', LoginSchema)
module.exports = collection














































