$(document).ready(function(){
  getFirstFishName();
  newFishFromUserInput();
});//end doc.ready

//SO MANY FUNCTIONS

function getFishList() {
  $.ajax({
    type: 'GET',
    url: '/fish', //we are returning the fishies array and is the response?
    success: function(response){ //this function runs upon a successful completion of the response (ajax request has beens successful)
      $('#fishTable').empty();
      appendingFish(response);
      // appendingFirstFishName(response);
    }//ends success
  });//ends ajax
}

function appendingFish(array) {
  for (var i = 0; i < array.length; i++) {
    $('#fishTable').append('<tr><td>' + array[i].name + '</td><td>' + array[i].dateAdded + '</td></tr>');
  }
}

function getFirstFishName() {
  $.ajax({
    type: 'GET',
    url: '/fish/first/name', //we are returning the fishies array and is the response?
    success: function(response){ //this function runs upon a successful completion of the response (ajax request has beens successful)
      $('#firstFishy').text(response);
    }//ends success
  });//ends ajax
}

function newFishFromUserInput(){
  getFishList();
  $('#newFishButton').on('click', function(){
    var newFishObject = {};
    newFishObject.name = $('#newFishName').val();
    $.ajax({
      type: 'POST',
      url: '/fish/new',
      data: newFishObject, //POST needs a body (data)
      success: function(response){
        getFishList();
      }
    })//ends ajax
  });//ends onclick
}
