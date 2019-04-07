// Cookie Parser
// Morgan
// Debug 
// htpp errors

var express = require('express');
var router = express.Router();
var Archive = require('../db.json');
var request = require('request');

/* GET home parge. */
// router.get('/', function(req, res, next) {

// var data = {
//   title: "Pro-Soccer",
//   archive: Archive,
//   message: false,
// };

router.get('/', function(req ,res,next){
    res.render('archive', {
      title: 'Archive Page '
    });

    var data = {
        title: "Pro-Soccer",
        archive: Archive,
        message: false,
      };
  
res.render('archive', data);
});

module.exports = router;

