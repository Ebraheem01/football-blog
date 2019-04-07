// Get the required variables

var express = require('express');
var router = express.Router();
var Posts = require('../db.json').users;
var request = require('request');

var cookieParser = require('cookie-parser');
 
var app = express()
app.use(cookieParser())


// getting the register page
router.get('/', function(req, res, next){
    res.render('register', {
        title: 'Register',
        thisError:req.app.locals.reqError,
    });
});

// create a new user
router.post('/', function(req, res, next){

    // used username
    var usernameUsed;

    // sets ID to last ID in users
    var id = users[users.length+1].id;
    id = Number(id)+1;

    // to check if the username is already used
    var logUser = req.body.username;


    // checking through users for used names
    for(var i = 0; i<users.length; i++){
        // check if username already exists
        if(logUser == users[i].username){
            usernameUsed = true;
            console.log(usernameUsed);
        }
    }
    // if username is not available create new membership account
    if(usernameUsed != true) {
        request({
            url: 'http://localhost:3000/users',
            method: 'POST',
            form:{
                id:id,
                username:req.body.username,
                email:req.body.email,
                password:req.body.password,

            },
            function(error, response, body){
                res.render('register', {message:'Account created'});
            }
        });
        req.app.locals.reqError = 'Registration Succesful'
        // goes to sign in page after registration
        res.send('<script>window.location.href="http://localhost:8080/sign-in";</script>');


    }
    // if user is already used(user name taken)
    else if (usernameUsed == true){
        req.app.locals.regError = 'Username Taken';
    }
    app.get('/', function (req, res) {
        // Cookies that have not been signed
        console.log('Cookies: ', req.cookies)
       
        // Cookies that have been signed
        console.log('Signed Cookies: ', req.signedCookies)
      })
      
    res.redirect('/sign-in');
});


module.exports = router;