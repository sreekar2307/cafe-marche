var express= require('express'),
    Coffeshop = require('./models/CoffeshopsSchema');
    ejs = require('ejs'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    seeddb= require('./seed.js');

var app = express();
app.use(express.static('public')); // search for .css files in the directory called public
app.set('view engine','ejs'); // all .ejs files that are rendered to now after this code we can remove the extension
app.use(bodyParser.urlencoded({extended:true}));  // create an object of the body when used for request to post 
mongoose.connect("mongodb://localhost/Final2");
seeddb();
//=======================================================Routes=====================================================//
//==================================================================================================================//

app.get('/',function(req,res){
  res.render('homepage');
});
//=======Index======//
//=======displays all coffeeshops=======//

app.get('/coffeshops',function(req,res){
  Coffeshop.find({},function(err,coffee){
    if(err){
      console.log('something went wrong');
    }
    else{
        res.render('index',{coffeshops:coffee});
    }
  });
});

//=======New======//
//=======displays Form Page=======//
app.get('/coffeshops/new',function(req,res){
  res.render('new');
})

//=======Create======//
//=======Create a coffeeshop=======//

app.post('/coffeshops',function(req,res){
   var body = req.body;
   var newcoffeshop = {name:req.body.name,image:req.body.image,description:req.body.description}
    Coffeshop.create(newcoffeshop,function(err,coffeshop){  // this add content to a row
    if(err){
      console.log('something went wrong');
    }
    else{
      console.log(coffeshop+" 1");
      res.redirect('/coffeshops');
    }
  });
});

//=======Show======//
//=======displays info of a coffeeshop=======//
app.get("/coffeshops/:id", function(req, res){
    Coffeshop.findById(req.params.id).populate("comments").exec(function(err, foundCoffeeshop){
        if(err){
            console.log(err);
        } else {
            //render show template with that coffeshop
            res.render("show", {coffee: foundCoffeeshop});
        }
    });
});

//=======Comment New======//
//=======displays comment section=======//
app.post("/coffeshops/:id/newComment",function(req,res){
	  var body =req.body;
	  console.log(body);
  	    Coffeshop.findById(req.params.id,function(err,coffeshop){
         if(err){
          console.log('error point 1')
         }
         else{
          coffeshop.comments.push({comment:body.comment,author:body.author}); 
          coffeshop.save(function(err){
          console.log(err);
          res.redirect('/coffeshops/'+coffeshop._id);
      });
  	 }	
 });
});       

//==================================================================================================================//
//==================================================================================================================//
app.listen(3000,function(){
	console.log('Application has started');
});