
$(document).ready(function () {
  var today = dayjs();
  $('#today').text(today.format('MMM D, YYYY'));
})
var oneDayFromToday = $('#1-day-from-now');
var twoDayFromToday = $('#2-day-from-now');
var threeDayFromToday = $('#3-day-from-now');
var fourDayFromToday = $('#4-day-from-now');
//oneDayFromToday.setDate(oneDayFromToday.getDate()+1);
//var oneDayFromToday = today.setDate(today.getDate() + days); 
//oneDayFromToday.text('MMM D, YYYY'); 
//console.log(oneDayFromToday) 
var cityEl = $('#city'); //jquery to get city bt id
var state = $('#state');
var country = $('#country');
//var searchButtonEl = $('btn')
var searchButton = document.querySelector('.btn');
var tempToday = $('temp-today');
var windToday = $('wind-today');
var humidityToday = $('humidity-today');

var APIKey = 'eb5b6e6998810d2cc4976506438f175c';
var lattitude = $('lat');//lattitude
var longtitude = $('lon');//longtitude
var searchInputVal = $('#search-input').val();

city = {
  name: [],
  lattitude: [],
  longtitude: [],
}
//function on search
// function searchButton(event) {
//   event.preventDefault();
//   var cityNameEl = $("<p>") //creates paragraph
//   cityName.text("hello");
//   city.append(cityNameEl);

//   if (!cityNameEl) {
//     console.error('Enter the name of the city');
//     return;
//   }
//   localStorage.setItem('city', JSON.stringify(cityName))
//   console.log(cityName);
//   getCoordinates(cityName);
// }



// function getCoordinates(cityName) {
//   var URL = 'http://api.openweathermap.org/geo/1.0/direct?q=' + cityName + '&limit=5&appid=' + APIKey;

//   fetch(URL)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data)
//     })
// }
function searchAPI() {
  //var weatherURLByCityName = 'api.openweathermap.org/data/2.5/weather?q='+ cityName +'&appid=' + APIKey + '&units=imperial';
  var test = 'https://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=eb5b6e6998810d2cc4976506438f175c&units=imperial'

  fetch(test)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
    })
}

searchButton.addEventListener('click', searchAPI);

// function getAPI() {
//   //API call by Coordinates
//   var weatherURLByCoordinates = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lattitude + '&lon=' + longtitude + '&appid=' + APIKey + '&units=imperial';


//   fetch(weatherURLByCoordinates)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data)
//     })

// }
// data={
//   temp: list.main.temp, 
//   wind: list.wind.speed, 
//   humidity: list.main.humidity, 
// }



