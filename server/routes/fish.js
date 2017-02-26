//
var express = require('express')
//express has a router function that packages up our router files as an object for us to use with module.exports. which is why we need router. in our modules
var router = express.Router();

var fishiesList = [{name: 'walleye'}, {name: 'pike'}, {name: 'muskie'}, {name: 'sunfish'}, {name: 'pufferfish'}];

for (var i = 0; i < fishiesList.length; i++) {
  fishiesList[i].dateAdded = Date();
}

//requesting entire fishies array
router.get('/', function(req, res){
  res.send(fishiesList); //THIS IS THE RESPONSE IS NECCESSARY!! DON'T LEAVE THE BROWSER HANGING lmao
});

//requesting only first fish object in the fishies array
router.get('/first', function(req, res){
  res.send(fishiesList[0]); //THIS IS THE RESPONSE IS NECCESSARY!! DON'T LEAVE THE BROWSER HANGING lmao
});

//requesting only last fish object in the fishies array
router.get('/last', function(req, res){
  var lastIndex = fishiesList.length - 1;
  res.send(fishiesList[lastIndex]);
});

//handle request for the name of the last fish
router.get('/last/name', function(req, res){
  var lastIndex = fishiesList.length - 1;
  res.send('Your fish is ' + fishiesList[lastIndex].name + "!");
});

//handle the request for the name of the first fish
router.get('/first/name', function(req, res){
  res.send('Your fish is ' + fishiesList[0].name + "!"); //THIS IS THE RESPONSE IS NECCESSARY!! DON'T LEAVE THE BROWSER HANGING lmao
});

router.post('/new', function(req, res, err){
  for (var i = 0; i < fishiesList.length; i++) {
    if (req.body.name == fishiesList[i].name){
      req.body = null;
      res.status(500).send("You've already caught that fish. NEW FISH ONLY!")
    }
  }
  if (req.body.name == ''){
    res.status(500).send("Don't forget your fish!!")

  } else {
    var newFish = req.body;
    fishiesList.push(newFish);
    for (var i = 0; i < fishiesList.length; i++) {
      fishiesList[i].dateAdded = Date();
    }
    res.sendStatus(200);
  }

});

//allows you to grab router in another file
module.exports = router;
