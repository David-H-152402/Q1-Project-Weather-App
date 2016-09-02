$(document).ready(function() {
  $('#modal1').openModal();
  $('#modal-button').on('click', function(event) {
    event.preventDefault();
    const myCity = $('#city').val()
    const myState = $('#state').val()
    ajaxRequest(myCity, myState);
  });

  function ajaxRequest(city, state) {
    $.ajax({
      method: 'GET',
      url: `http://api.wunderground.com/api/683a8f0a30e49337/forecast/q/${state}/${city}.json`,
      dataType: 'json',
      success: function(data) {
        console.log('success!', data);
        // ================================================================ Day [0]
        const weatherData = {};
        weatherData.today = data.forecast.txt_forecast.forecastday[0].title
        weatherData.time = data.forecast.txt_forecast.date
        weatherData.icon = data.forecast.txt_forecast.forecastday[0].icon_url
        weatherData.conditions = data.forecast.txt_forecast.forecastday[0].fcttext
        weatherData.hiTempFahrenheit = data.forecast.simpleforecast.forecastday[0].high.fahrenheit
        weatherData.hiTempCelsius = data.forecast.simpleforecast.forecastday[0].high.celsius;
        weatherData.loTempFahrenheit = data.forecast.simpleforecast.forecastday[0].low.fahrenheit;
        weatherData.loTempCelsius = data.forecast.simpleforecast.forecastday[0].low.celsius;
        weatherData.maxWind = data.forecast.simpleforecast.forecastday[0].maxwind.dir + " " + data.forecast.simpleforecast.forecastday[0].maxwind.mph + " " + "mph"
        putDataIn(weatherData);
        //================================================================ day[1]
        var weatherData1 = {};
        weatherData1.today = data.forecast.txt_forecast.forecastday[2].title
        weatherData1.time = data.forecast.txt_forecast.date
        weatherData1.icon = data.forecast.txt_forecast.forecastday[2].icon_url
        weatherData1.conditions = data.forecast.txt_forecast.forecastday[2].fcttext
        weatherData1.hiTempFahrenheit = data.forecast.simpleforecast.forecastday[1].high.fahrenheit
        weatherData1.hiTempCelsius = data.forecast.simpleforecast.forecastday[1].high.celsius;
        weatherData1.loTempFahrenheit = data.forecast.simpleforecast.forecastday[1].low.fahrenheit;
        weatherData1.loTempCelsius = data.forecast.simpleforecast.forecastday[1].low.celsius;
        weatherData1.maxWind = data.forecast.simpleforecast.forecastday[1].maxwind.dir + " " + data.forecast.simpleforecast.forecastday[1].maxwind.mph + " " + "mph"
        putDataIn1(weatherData1);
        //================================================================ day[2]
        var weatherData2 = {};
        weatherData2.today = data.forecast.txt_forecast.forecastday[4].title
        weatherData2.time = data.forecast.txt_forecast.date
        weatherData2.icon = data.forecast.txt_forecast.forecastday[4].icon_url
        weatherData2.conditions = data.forecast.txt_forecast.forecastday[4].fcttext
        weatherData2.hiTempFahrenheit = data.forecast.simpleforecast.forecastday[2].high.fahrenheit
        weatherData2.hiTempCelsius = data.forecast.simpleforecast.forecastday[2].high.celsius;
        weatherData2.loTempFahrenheit = data.forecast.simpleforecast.forecastday[2].low.fahrenheit;
        weatherData2.loTempCelsius = data.forecast.simpleforecast.forecastday[2].low.celsius;
        weatherData2.maxWind = data.forecast.simpleforecast.forecastday[2].maxwind.dir + " " + data.forecast.simpleforecast.forecastday[2].maxwind.mph + " " + "mph"
        putDataIn2(weatherData2);
        //================================================================ Monday[3]
        var weatherData3 = {};
        weatherData3.today = data.forecast.txt_forecast.forecastday[6].title
        weatherData3.time = data.forecast.txt_forecast.date
        weatherData3.icon = data.forecast.txt_forecast.forecastday[6].icon_url
        weatherData3.conditions = data.forecast.txt_forecast.forecastday[6].fcttext
        weatherData3.hiTempFahrenheit = data.forecast.simpleforecast.forecastday[3].high.fahrenheit
        weatherData3.hiTempCelsius = data.forecast.simpleforecast.forecastday[3].high.celsius;
        weatherData3.loTempFahrenheit = data.forecast.simpleforecast.forecastday[3].low.fahrenheit;
        weatherData3.loTempCelsius = data.forecast.simpleforecast.forecastday[3].low.celsius;
        weatherData3.maxWind = data.forecast.simpleforecast.forecastday[3].maxwind.dir + " " + data.forecast.simpleforecast.forecastday[3].maxwind.mph + " " + "mph"
        putDataIn3(weatherData3);
      }
    })
  };
  //=============================================================== Day[0]
  function putDataIn(weatherData) {
    $('#day0').text(weatherData.today);
    $('#time0').text("Taken " + weatherData.time);
    $('#icon0').html(`<img src="${weatherData.icon}">`);
    $('#hitemp0').text("High : " +
      weatherData.hiTempFahrenheit + " F " + " | " + weatherData.hiTempCelsius + " C ");
    $('#lotemp0').text("Low : " +
      weatherData.loTempFahrenheit + " F " + " | " + weatherData.loTempCelsius + " C ");
    $('#conditions0').text(weatherData.conditions);
    $('#wind0').text("Wind Speed : " + weatherData.maxWind);
  }
  //============================================================= day[1]
  function putDataIn1(weatherData1) {
    $('#day1').text(weatherData1.today);
    $('#time1').text("Taken " + weatherData1.time);
    $('#icon1').html(`<img src="${weatherData1.icon}">`);
    $('#hitemp1').text("High : " +
      weatherData1.hiTempFahrenheit + " F " + " | " + weatherData1.hiTempCelsius + " C ");
    $('#lotemp1').text("Low : " +
      weatherData1.loTempFahrenheit + " F " + " | " + weatherData1.loTempCelsius + " C ");
    $('#conditions1').text(weatherData1.conditions);
    $('#wind1').text("Wind Speed : " + weatherData1.maxWind);
  }
  //============================================================ day[2]
  function putDataIn2(weatherData2) {
    $('#day2').text(weatherData2.today);
    $('#time2').text("Taken " + weatherData2.time);
    $('#icon2').html(`<img src="${weatherData2.icon}">`);
    $('#hitemp2').text("High : " +
      weatherData2.hiTempFahrenheit + " F " + " | " + weatherData2.hiTempCelsius + " C ");
    $('#lotemp2').text("Low : " +
      weatherData2.loTempFahrenheit + " F " + " | " + weatherData2.loTempCelsius + " C ");
    $('#conditions2').text(weatherData2.conditions);
    $('#wind2').text("Wind Speed : " + weatherData2.maxWind);
  }
  //============================================================ day[3]
  function putDataIn3(weatherData3) {
    $('#day3').text(weatherData3.today);
    $('#time3').text("Taken " + weatherData3.time);
    $('#icon3').html(`<img src="${weatherData3.icon}">`);
    $('#hitemp3').text("High : " +
      weatherData3.hiTempFahrenheit + " F " + " | " + weatherData3.hiTempCelsius + " C ");
    $('#lotemp3').text("Low : " +
      weatherData3.loTempFahrenheit + " F " + " | " + weatherData3.loTempCelsius + " C ");
    $('#conditions3').text(weatherData3.conditions);
    $('#wind3').text("Wind Speed : " + weatherData3.maxWind);
  }
});
