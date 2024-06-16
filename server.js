const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
mongoose.set("strictQuery", false);

const app = express();
const PORT = 9992;

// Serve static files from the Angular app
app.use(express.static(path.join(__dirname, 'dist/product-store')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/product-store/index.html'));
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/product-store/index.html'));
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

// Connect to the database
mongoose.connect('mongodb://localhost:27017/userlist', 
{ useNewUrlParser: true, useUnifiedTopology: true }, 
function checkDb(error) {
    if (error) {
        console.log('Error Connecting to DB');
    } else {
        console.log('Successfully Connected to DB');
    }
});



// https://www.youtube.com/watch?v=1JEQ2cnnBGQ&t=1091s
// https://www.youtube.com/watch?v=1JEQ2cnnBGQ&t=1091s
// https://www.youtube.com/watch?v=1JEQ2cnnBGQ&t=1091s











// These are the changes need to be made in 'db.js':
// const mongoose = require("mongoose");
// const mongoURI = "mongodb://localhost:27017";

// const connectToMongo = async () => {
//   try {
//     mongoose.set("strictQuery", false);
//     mongoose.connect(mongoURI);
//     console.log("Connected to Mongo Successfully!");
//   } catch (error) {
//     console.log(error);
//   }
// };
// module.exports = connectToMongo;



// mongoose.connect('mongodb://localhost:27017/userlist', {userNewUrlPsrser: true, useUnifiedTopology: true},
// function checkDb(error)
// {
    // if(error){
        
    //     console.log('Error Connecting to DB')
    // }
    // else{
    //     console.log('Seccessfully Connected to DB')
    // }

//       try {
//     mongoose.set("strictQuery", false);
//     mongoose.connect(mongoURI);
//     console.log("Connected to Mongo Successfully!");
//   } catch (error) {
//     console.log(error);
//   }



// })
// module.exports = checkDb;




// Methods	   Urls	                    Actions
// POST	/api/auth/signup	signup new account
// POST	/api/auth/signin	login an account
// POST	/api/auth/signout	logout the account
// GET  	/api/test/all    	retrieve public content
// GET 	/api/test/user	    access User’s content
// GET	    /api/test/mod	    access Moderator’s content
// GET	    /api/test/admin	    access Admin’s content

// https://www.bezkoder.com/node-js-express-login-mongodb/