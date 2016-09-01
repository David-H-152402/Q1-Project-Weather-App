$(document).ready(function() {
  console.log("ready!");
  $('#modal1').openModal();
  var testing;
  $('#modal-button').on('click', function(event) {
    event.preventDefault();
    ajaxRequest();
  });

  function ajaxRequest() {
    console.log("ajax request invoked");
    $.ajax({
      method: 'GET',
      url: 'http://api.wunderground.com/api/683a8f0a30e49337/forecast/q/CO/Boulder.json',
      dataType: 'json',
      success: function(data) {
          console.log('success!', data);
          var weatherData = {


          };
        }
        //     error: function(err) {
        //       console.log('Your Weather was Not Found', err.submit - button);
        //     }
    })
  };
});
