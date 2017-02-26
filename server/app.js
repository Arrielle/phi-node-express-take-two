console.log('Log 2: Starting up the server! -app.js line 1');

//get static files up to the internet

//make express library available
var express = require('express'); //if nothing in front of express node defaults to looking for folders
//create an app 'object' with function properties
var app = express(); //call the library as a function
//a function that returns an object
//express is a function within express

//allows for req.body
var bodyParser = require('body-parser');

//pointing to new fish.js module
var fish = require('./routes/fish');

app.use(bodyParser.urlencoded({extended: true}));

//anything coming in that starts with /fish is going to be brought in and absorbed by the following line
//if the file starts with /fish
app.use('/fish', fish)

//relationship between express and app is similar to below-

// var taco = function(){
//   return {name: 'luke'}
// }
//
// var lettuce = taco; //lettuce IS the function
// var cheese = lettuce(); //cheese is the return of the function (the object)

app.use(express.static('server/public')); //every time we get a request app.use() will run determines if the request is a request for a static file
app.listen(5000);
