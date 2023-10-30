
$(document).ready(function () {
  var today = dayjs();
  $('#today').text(today.format('MMM D, YYYY'));
})
// var oneDayFromToday = $('#1-day-from-now');
// var twoDayFromToday = $('#2-day-from-now');
// var threeDayFromToday = $('#3-day-from-now');
// var fourDayFromToday = $('#4-day-from-now');
//oneDayFromToday.setDate(oneDayFromToday.getDate()+1);
//var oneDayFromToday = today.setDate(today.getDate() + days); 
//oneDayFromToday.text('MMM D, YYYY'); 
//console.log(oneDayFromToday) 
//var cityEl = $('#city'); //jquery to get city bt id
var city = document.getElementById('city');
// var state = $('#state');
// var country = $('#country');
//var searchButtonEl = $('btn')
var searchButton = document.getElementById('search-button');
var searchInput = document.getElementById('search-input');
var searchList = document.querySelector('ul')
var tempToday = document.querySelector('.temp-today');
var windToday = document.querySelector('.wind-today');
var humidityToday = document.querySelector('.humidity-today');

var APIKey = 'eb5b6e6998810d2cc4976506438f175c';
// var lattitude = $('lat');//lattitude
// var longtitude = $('lon');//longtitude
// var searchInputVal = $('#search-input').val();




//function on search
function formSearchButton(event) {
  event.preventDefault();
  
  var searchInputVal = searchInput.value;

  if (!searchInputVal) {
    console.error('Enter the name of the city');
    return;
  }
  localStorage.setItem('city',searchInputVal)
  console.log(searchInputVal);
  searchAPI(searchInputVal);
  getForecast(searchInputVal);
}

function searchAPI() {
  
  var requestURL = 'https://api.openweathermap.org/data/2.5/weather?q='; 
  

  fetch(requestURL+searchInput.value+'&appid='+APIKey+'&units=imperial')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      console.log(data.main.temp +' ℉')
      console.log(data.main.humidity + ' %')
      console.log(data.wind.speed + ' pmh')

      tempToday = data.main.temp +' ℉'; 
      humidityToday = data.main.humidity + ' %'; 
      windToday = data.wind.speed + ' pmh'; 
    })
     
    
    // for (var i = 0; i < 10; i++) {
    //   //Create a list element
    //   var listItem = document.createElement('li');

    //   //Set the text of the list element to the JSON response's .html_url property
    //   listItem.textContent = data[i].html_url;

    //   //Append the li element to the id associated with the ul element.
    //   searchList.appendChild(listItem);
    //}
}
//searchAPI()
searchButton.addEventListener('click', formSearchButton);

function getForecast() {
   var locationURL = 'https://api.openweathermap.org/data/2.5/forecast?q='

   fetch(locationURL+ searchInput.value +'&appid='+APIKey+'&units=imperial')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
    })
  }
  //getForecast()



