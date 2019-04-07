// create the required variables

var express = require('express');
var router = express.Router();
var users = ('../db.json').users;
var request = require('request');

var cookieParser = require('cookie-parser');
 
var app = express()
app.use(cookieParser())

// Getting the sign-in page 

router.get('/', function(req ,res ,next) {
  res.render("sign-in"), {
    title: "Sign-in",
    signInError: req.app.locals.signError,
  }
});

router.post('/', function(req ,res ,next) {
  var logUser = req.body.username;
  var logPassword = req.body.password;


      // need to create a cookie
      // res.cookie('user', user[i].id);

      // sets logUser  tothe correct user name
      // logUser = username;
      console.log(req.cookies);

      // sets the correct sign in variables
      req.app.locals.users === logUser;
      // req.app.locals.usersIndex = [i];
      req.app.locals.signError = 'Log In Successful';
      
      // It must redirect to the home page after signed in
      res.redirect('/');
    
    // Check that the user is signed in correctly 
    if(req.app.locals.user != logUser) {

      // If details are incorrect
      req.app.locals.signInError = 'Username or Password is incorrect';      
    };
    app.get('/', function (req, res) {
      // Cookies that have not been signed
      console.log('Cookies: ', req.cookies)
     
      // Cookies that have been signed
      console.log('Signed Cookies: ', req.signedCookies)
    })
    
    res.redirect('/');

  })
module.exports = router;