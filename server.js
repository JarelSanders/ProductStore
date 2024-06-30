const express = require('express');
const path = require('path');
const collection = require("./mongodb");
const bcrypt = require("bcrypt");

const app = express();
const PORT = 9992;

// Convert data into JSON format
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files from the 'src' directory
app.use(express.static(path.join(__dirname, '/src/')));

app.use(express.static(path.join(__dirname, '/src/app/components/sign-up/')));
// app.use(express.static(path.join(__dirname, 'src')));



// Serve the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/app/components/main', 'main.component.html'));
});

// Serve the login page
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/app/components/login', 'login.component.html'));
});

// Serve the signup page
app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/app/components/sign-up', 'sign-up.component.html'));
});

// Register user
app.post('/signup', async (req, res) => {
    const data = {
        name: req.body.email,
        password: req.body.password
    };
    const userdata = await collection.insertMany(data);
    console.log(userdata);
    res.sendFile(path.join(__dirname, 'src/app/components/main', 'main.component.html'));
    console.log("test");
});

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
