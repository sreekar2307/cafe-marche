var mongoose = require('mongoose'); 
var Coffeshop = require('./models/CoffeshopsSchema');
var coffeshops=[
  {	name : "Coffee Supreme",
   	image : "http://331mrnu3ylm2k3db3s1xd1hg.wpengine.netdna-cdn.com/wp-content/uploads/2015/05/Sprudge-CoffeeSupremeChristchurch-D9072.jpg",
    description: 'Dolore culpa excepteur ut voluptate incididunt fugiat dolor officia amet tempor ex fugiat voluptate in consectetur eiusmod in ullamco sit non culpa occaecat incididunt deserunt.'
  },
  {	name:'Heart',
  	image:'http://cdn.trottermag.com/hero/portland/heart-coffee-20150312140253.jpg',
  	description: 'Quis dolore dolor est reprehenderit adipisicing exercitation excepteur deserunt minim sunt in incididunt eu labore do laborum nulla dolor veniam quis et exercitation in qui sunt irure duis pariatur.'
  },
  {	name:'Kaffeine',
  	image:"https://media.timeout.com/images/102443489/image.jpg",
  	description:'Lorem ipsum ut nostrud culpa cupidatat cupidatat fugiat aute cupidatat esse amet eu eu aliqua adipisicing magna exercitation commodo sint deserunt labore ullamco enim quis aute aliquip officia ut anim in anim deserunt anim ut laboris magna.'
  },
  {	name:'Blue bootle',
  	image:"https://blue-bottle.global.ssl.fastly.net/assets/our_story/300-4456e0e51d378906c3bd11f354839da04115c4046473caeffe11c8d100f19ef6.jpg",
    description:'Excepteur aliquip adipisicing culpa ut quis ad voluptate quis exercitation dolor ea culpa enim dolore laborum non laboris sed officia mollit pariatur tempor dolore consequat voluptate eiusmod pariatur nostrud ut minim proident enim anim exercitation commodo exercitation.'
  }
]
function seedDB(){
	Coffeshop.remove({},function(err){
		if(err){
			console.log('error point 1');
		}
		console.log('removed all in coffeshop collection');
		coffeshops.forEach(function(coffeshop){
            Coffeshop.create(coffeshop,function(err,data){
               if(err){
                   console.log('error point 2');
               }
               else{
               	 console.log('coffeshop created');
          }
		    });
		});
	});
}
module.exports=seedDB;
