var express = require('express');
var router = express.Router();
var Posts = require('../db.json').users;
var request = require('request');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
