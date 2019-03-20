import $ from 'jquery';
import './input.scss';
import { WeatherService } from './weather-service.js';
// var unirest = require('unirest');


$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    $('#location').val("");
    // $.ajax({
    //     url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.API_KEY}`,
    //     type: `GET`,
    //     data: {
    //       format: 'json'
    //     },
    //     success: function(response) {
    //       $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
    //       $('.showTemp').text(`The temperature in Fahrenheit is ${response.main.temp} degrees.`);
    //     },
    //     error: function() {
    //       $('#errors').text("there was an error pricessing your request. Please try again.");
    //   }
    // });

    let weatherService = new WeatherService();
    let promise = weatherService.getWeatherByCity(city);


     promise.then(function(response) {
       let body =JSON.parse(response);
       $('showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
       $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
     }, function(error) {
       $('.showErrors').text(`There was an error processing your request: ${error.message}`);

   });
  });
});
