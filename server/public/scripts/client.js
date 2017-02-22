console.log('Log 0: Client.js is in!!!');
$(document).ready(function(){
  console.log('Log 1: jQuery was properly sourced');
  getFishList();
  console.log('testlog');

});//end doc.ready

function getFishList() {
  $.ajax({
    type: 'GET',
    url: '/fish',
    success: function(response){ //this function runs upon a successful completion of the response (ajax request has beens successful)
      console.log('Log 3: ajax response', response);
    }//ends success
  });//ends ajax
}
