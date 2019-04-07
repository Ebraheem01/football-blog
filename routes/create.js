var express = require('express');
var router = express.Router();
var Posts = ('../db.json');
var request = require('request');

// get create page

router.get('/', function(req ,res,next){
  res.render('create', {
    title: 'Create Page'
  });
});

// post a create
router.post('/', function(req,res,next){
  var posts = Posts.post;

  // get ID of last post
  var id = Posts[Posts.length-1].id;

  // 
  id = Number(id)+1;

  // getting the date

  var newDate = new Date(); 
  // date format
  var date = '${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()}';
  
  // get the description/content

  var content = request.body.content;

  // text is used for the description
  // turns the object into a string

  var text = JSON.stringify(content);

  //  description variabe

  var description;
  description = text.charAt(1);
  
  // Gets the character or char from a string 

  for(var i = 2; i < 200; i++) {
    description += text.charAt(i);
}

// Post request

request({
  url: 'localhost:3000',
  method: Posts,
  form: {
    id : 'id',
    date : 'date',
    title : 'req.body.title',
    image : 'request.body.image',
    description : 'description' + '...</p>',
    content : 'content',
    author : 'request.app.locals.user',
  },
  function(error,response,body) {
    res.render('index', {message: 'Successfully Adedd'});

  }
})
    
    // redirect to homepage after you create
    res.redirect('...');
});
    
    module.exports = router;
