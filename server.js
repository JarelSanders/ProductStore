const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const { type } = require('os');
const { stringify } = require('querystring');
mongoose.set("strictQuery", false);
const connect = mongoose.connect('mongodb://localhost:27017/login');
// const collection = require("./co")

const app = express();
const PORT = 9992;

// convert data into JSON format
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))



// Serve static files from the Angular app
app.use(express.static(path.join(__dirname, 'dist/product-store')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/product-store/index.html'));
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/product-store/index.html'));
});

// register
app.post('/signup', async (req, res) => {
    const data = {
        email: req.body.email,
        password: req.body.password,
        repeatpassword: req.body.repeatpassword
    }

    const userdata = await collection.insertMany(data)
    cconsole.log(userdata)
})
// 17.36
// Catch all other routes and return the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/product-store/index.html'));
});

app.listen(PORT, function check(err) {
    if (err) {
        console.log('error');
    } else {
        console.log(`started port ${PORT}`);
    }
});

// check db connection
connect.then(() => {
    console.log("Database connected Successfully")
})
.catch(() => {
    console.log("Database cannot be connected")
})


// creating a schema
const LoginSchema = new mongoose.Schema({
    email: {
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




