import $ from 'jquery';
import './input.scss';

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    $('#location').val("");
    $.ajax({
        url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=f90163aedea7c0a2406f9202c878ba2b`,
        type: `GET`,
        data: {
          format: 'json'
        },
        success: function(response) {
          $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
          $('.showTemp').text(`The temperature in Fahrenheit is ${response.main.temp} degrees.`);
        },
        error: function() {
          $('#errors').text("there was an error pricessing your request. Please try again.");
      }
    });
  });
});
