console.log('Log 0: Client.js is in!!!');
$(document).ready(function(){
  console.log('Log 1: jQuery was properly sourced');
  getFishList();
  getFirstFishName();
});//end doc.ready

function getFishList() {
  $.ajax({
    type: 'GET',
    url: '/fish', //we are returning the fishies array and is the response?
    success: function(response){ //this function runs upon a successful completion of the response (ajax request has beens successful)
      appendingFish(response);
      appendingFirstFishName(response);
    }//ends success
  });//ends ajax
}

function appendingFish(array) {
  for (var i = 0; i < array.length; i++) {
    $('#fishTank').append('<li>' + array[i].name + '</li>');
  }
}

function getFirstFishName() {
  $.ajax({
    type: 'GET',
    url: '/fish/first/name', //we are returning the fishies array and is the response?
    success: function(response){ //this function runs upon a successful completion of the response (ajax request has beens successful)
      appendingFirstFishName(response);
    }//ends success
  });//ends ajax
}

function appendingFirstFishName(fishname) {
    $('#firstFishy').append(fishname);
}
