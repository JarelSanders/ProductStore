 const express = require('express')
// const { default: mongoose } = require('mongoose')
 const app = express()
 const mongoose  = require('mongoose');
 mongoose.set("strictQuery", false);



//  app.listen(9002,function check(error)
//  {
//     if(error){
//         console.log('Error....!!!!');
//     }
//     else{
//         console.log('Started.....');
//     }
// })

app.listen(9992, function check(err){
    if(err){
        console.log('error');
    }
    else{
        console.log('started');
    }

});
 
// connects to db
mongoose.connect('mongodb://localhost:27017/userlist',
{useNewUrlParser: true, useUnifiedTopology: true},
function checkDb(error)
{
    if(error)
    {
        console.log('Error Connecting to DB');
        
    }
    else{
        console.log('Successfully Connected to DB')
    }
}
)



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