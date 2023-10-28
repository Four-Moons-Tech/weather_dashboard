
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
var city = $('#city'); //jquery to get city bt id
var state = $('#state');
var country = $('#country');
var searchButtonEl = $('btn')
var tempToday = $('temp-today'); 
var windToday = $('wind-today'); 
var humidityToday = $('humidity-today');
 
var APIKey = 'eb5b6e6998810d2cc4976506438f175c'; 
var lattitude = $('lat');//lattitude
var longtitude = $('lon');//longtitude

//function on search
function searchButton(event) {
  event.preventDefault();

  var searchInputVal = $('#search-input').val();
  //searchInputVal = city; 
  if (searchInputVal) {
      console.error('Enter the name of the city');
      return;
    } 

  console.log(searchInputVal);
  getCoordinates(searchInputVal);
}

searchButtonEl.addEventListener('click', getCoordinates());

function getCoordinates(){
  var URL = 'http://api.openweathermap.org/geo/1.0/direct?q=' + city +'&limit=5&appid=' + APIKey; 
  fetch(URL)
  .then(function(response){
    return response.json();
  })
  .then(function (data) {
    console.log(data)
})
}




function getAPI(city,state,country) {
    //API call by City
    var limit = 5; 
    var weatherURLByCityStateCountry = 'api.openweathermap.org/data/2.5/forecast?q=' + city + state + country + '&limit='+ limit + '&appid=' + APIKey + '&units=imperial'; 
    
    fetch(weatherURLByCityStateCountry)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        console.log(data)
    })
     
}
// data={
//   temp: main.temp, 
//   wind: wind.speed, 
//   humidity: main.humidity, 
// }
    
    

