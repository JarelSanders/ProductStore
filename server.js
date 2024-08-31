// import { SignUpComponent } from './sign-up.component';

const express = require('express');
const path = require('path');
const collection = require("./mongodb");
const cors = require('cors')
const bcrypt = require("bcrypt");

const app = express();
app.use(cors())
const PORT = 9992;

// Convert data into JSON format
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



// console.log(__dirname)
// Serve static files from the 'src' directory
// app.use(express.static(path.join(__dirname, '../../../../public/')))
// app.use(express.static(path.join(__dirname, '/src/')));
app.use(express.static(path.join(__dirname, '/')));
app.use(express.static(path.join(__dirname, '/src/app/components/sign-up/')));
// app.use(express.static(path.join(__dirname, '/src/app/components/products/')));
// app.use(express.static(path.join(__dirname, '/src/app/components/main/')));
// app.use(express.static(path.join(__dirname, '/src/app/components/login/')));
// app.use(express.static(path.join(__dirname, '/src/app/components/sales/')));
// app.use(express.static(path.join(__dirname, '/src/app/components/shopping-cart/')));
app.use(express.static(path.join(__dirname, 'dist/product-store')));


// app.use('/typeScript', express.static(__dirname, + '/sign-up'))

app.get("/data", (req, res) => {
  // Send some data back to the frontend
      console.log("Sending data...");

  res.json({ message: "Data response" });
});


// Serve the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/product-store', 'index.html'));
});

// Serve the main page
app.get('/main', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/product-store', 'index.html'));
});

// Serve the shopping-cart page
app.get('/shopping-cart', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/product-store', 'index.html'));
});

// Serve the sales page
app.get('/sales', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/product-store', 'index.html'));
});

// Serve the sales page
app.get('/products', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/product-store', 'index.html'));
});

// Serve the login page
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/product-store', 'index.html'));
});

// Serve the signup page
app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/product-store', 'index.html'));
});

// Register user
app.post('/signup', async (req, res) => {
    const data = {
        name: req.body.email,
        password: req.body.password
    };
    const userdata = await collection.insertMany(data);
    console.log(userdata);
    res.sendFile(path.join(__dirname, 'dist/product-store', 'index.html'));
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
