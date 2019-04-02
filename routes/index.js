var express = require('express');
var router = express.Router();
var Posts = ('../db.json');

/* GET home page. */
router.get('/', function(req, res, next) {

var data = {
  title: "Pro-Soccer",
  posts: Posts,
  message: false
};

res.render('index', data);
});

module.exports = router;
