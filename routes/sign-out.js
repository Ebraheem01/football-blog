// create the required variables

var express = require('express');
var router = express.Router();
var request = require('request');

// Getting the sign-out page 

router.get('/', function(req ,res ,next) {
  // sets default
  req.app.locals.login = false;
  req.app.locals.user = '';
  req.app.locals.signInError = '';
  req.app.locals.reqError = '';
  

  // create a cookie 
  res.clearCookie('userId');
  console.log(req.cookies.userId);

  res.redirect('/');
});

module.exports = router;