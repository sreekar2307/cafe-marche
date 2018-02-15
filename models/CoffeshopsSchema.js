var mongoose = require('mongoose');
var CommentsSchema = new mongoose.Schema({
	comment:String,
	author:String
});
var CoffeshopsSchema = new mongoose.Schema({// constructor parameters define how each row should be
   name:String,
   image:String,
   description:String,
   comments:[CommentsSchema]
});

module.exports = mongoose.model('coffeshop',CoffeshopsSchema); //the complete table with name coffeshop