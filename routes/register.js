// Get the required variables

var express = require('express');
var router = express.Router();
var Posts = require('../db.json').users;
var request = require('request');



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
    // var usernameUsed;

    // sets ID to last ID in users
    // var id = users[users.length+1].id;
    // id = Number(id)+1;

    // to check if the username is already used
    // var logUser = req.body.username;


    // checking through users for used names
    // for(var i = 0; i<users.length; i++){
    //     // check if username already exists
    //     if(logUser == users[i].username){
    //         usernameUsed = true;
    //         console.log(usernameUsed);
    //     }
    // }
    // if username is not available create new membership account
    // if(usernameUsed != true) {
        request({
            url: 'http://localhost:8080/register',
            method: 'Posts',
            form:{
                id:"id",
                username:"req.body.username",
                email:"req.body.email",
                password:"req.body.password",

            },
            function(error, response, body){
                res.render('register', {message:'Account created'});
            }
        });
        req.app.locals.reqError = 'Registration Succesful'
        // goes to sign in page after registration
        res.redirect('/sign-in');
});



module.exports = router;