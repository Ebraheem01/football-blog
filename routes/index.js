var express = require('express');
var router = express.Router();
var Posts = require('../db.json');
var ReadMore = require('../db.json');



/* GET home parge. */
router.get('/', function(req, res, next) {

var data = {
  title: "Pro-Soccer",
  blog: Posts,
  readMore: ReadMore,
  message: false,
};

res.render('index', data);
});




module.exports = router;
