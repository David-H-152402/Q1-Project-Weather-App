$(document).ready(function() {
  console.log("ready!");
  $('#modal1').openModal();
  var testing;

  $('#modal-button').on('click', function(event) {
    event.preventDefault();
    var myCity = $('#city').val()
    var myState = $('#state').val()
    console.log('myCity', myCity);
    console.log('myState', myState);
    ajaxRequest(myCity, myState);
  });


  function ajaxRequest(city, state) {
    console.log("ajax request invoked");
    $.ajax({
      method: 'GET',
      url: `http://api.wunderground.com/api/683a8f0a30e49337/forecast/q/${state}/${city}.json`,
      dataType: 'json',
      success: function(data) {
        console.log('success!', data);
        var weatherData = {};
        weatherData.today = data.forecast.txt_forecast.forecastday[0].title
        weatherData.time = data.forecast.txt_forecast.date
        weatherData.icon = data.forecast.txt_forecast.forecastday[0].icon_url
        weatherData.conditions = data.forecast.txt_forecast.forecastday[0].fcttext
        weatherData.hiTempFahrenheit = data.forecast.simpleforecast.forecastday[0].high.fahrenheit
        console.log(weatherData.hiTempFahrenheit);
        weatherData.hiTempCelsius = data.forecast.simpleforecast.forecastday[0].high.celsius;
        console.log(weatherData.hiTempCelsius);
        weatherData.loTempFahrenheit = data.forecast.simpleforecast.forecastday[0].low.fahrenheit;
        console.log(weatherData.loTempFahrenheit);
        weatherData.loTempCelsius = data.forecast.simpleforecast.forecastday[0].low.celsius;
        console.log(weatherData.loTempCelsius);
        weatherData.maxWind = data.forecast.simpleforecast.forecastday[0].maxwind.mph + data.forecast.simpleforecast.forecastday[0].maxwind.dir
        weatherData.test = weatherData.maxWind
        console.log(weatherData.test);

        putDataIn(weatherData);
      }

      //     error: function(err) {
      //       console.log('Your Weather was Not Found', err.submit - button);
      //     }
    })
  };

  function putDataIn(weatherData) {
    console.log();
    $('#day').text(weatherData.today);
    $('#time').text("Taken " + weatherData.time);
    // $('#icon').text(weatherData.icon);
    $('#hitemp').text("High : " +
      weatherData.hiTempFahrenheit + " F " + " | " + weatherData.hiTempCelsius + " C ")
    $('#lotemp').text("Low : " +
      weatherData.loTempFahrenheit + " F " + " | " + weatherData.loTempCelsius + " C ")
    $('#conditions').text(weatherData.conditions);
    $('#wind').text("Max Wind Speed : " + weatherData.maxWind);
    $('#icon').html(`<img src="${weatherData.icon}">`)
  }
});
