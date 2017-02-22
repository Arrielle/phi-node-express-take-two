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

app.use(bodyParser.urlencoded({extended: true}));

//relationship between express and app is similar to below-

// var taco = function(){
//   return {name: 'luke'}
// }
//
// var lettuce = taco; //lettuce IS the function
// var cheese = lettuce(); //cheese is the return of the function (the object)

app.use(express.static('server/public')); //every time we get a request app.use() will run determines if the request is a request for a static file

var fishiesList = [{name: 'walleye'}, {name: 'pike'}, {name: 'muskie'}, {name: 'sunfish'}, {name: 'pufferfish'}];

//requesting entire fishies array
app.get('/fish', function(req, res){
  res.send(fishiesList); //THIS IS THE RESPONSE IS NECCESSARY!! DON'T LEAVE THE BROWSER HANGING lmao
});

//requesting only first fish object in the fishies array
app.get('/fish/first', function(req, res){
  res.send(fishiesList[0]); //THIS IS THE RESPONSE IS NECCESSARY!! DON'T LEAVE THE BROWSER HANGING lmao
});

//requesting only last fish object in the fishies array
app.get('/fish/last', function(req, res){
  var lastIndex = fishiesList.length - 1;
  res.send(fishiesList[lastIndex]);
});

//handle request for the name of the last fish
app.get('/fish/last/name', function(req, res){
  var lastIndex = fishiesList.length - 1;
  res.send('Your fish is ' + fishiesList[lastIndex].name + "!");
});

//handle the request for the name of the first fish
app.get('/fish/first/name', function(req, res){
  res.send('Your fish is ' + fishiesList[0].name + "!"); //THIS IS THE RESPONSE IS NECCESSARY!! DON'T LEAVE THE BROWSER HANGING lmao
});

app.post('/fish/new', function(req, res){
  var newFish = req.body;
  fishiesList.push(newFish);
  res.sendStatus(200);
});

app.listen(5000);
