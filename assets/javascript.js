
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
var cityName = document.querySelector('.city-name')
var searchButton = document.getElementById('search-button');
var searchInput = document.getElementById('search-input');

var searchList = document.querySelector('aside.ul')
var tempToday = document.querySelector('.temp-today');
var windToday = document.querySelector('.wind-today');
var humidityToday = document.querySelector('.humidity-today');
// 1 day from today
var oneDayFromToday = document.getElementById('1-day-from-now')
var tempOneDayFromToday = document.querySelector('.temp-1-day-from-now');
var windOneDayFromToday = document.querySelector('.wind-1-day-from-now');
var humidityOneDayFromToday = document.querySelector('.humidity-1-day-from-now');
// 2 days from today
var twoDayFromToday = document.getElementById('2-day-from-now')
var tempTwoDayFromToday = document.querySelector('.temp-2-day-from-now');
var windTwoDayFromToday = document.querySelector('.wind-2-day-from-now');
var humidityTwoDayFromToday = document.querySelector('.humidity-2-day-from-now');
// 3 days from today
var threeDayFromToday = document.getElementById('3-day-from-now')
var tempThreeDayFromToday = document.querySelector('.temp-3-day-from-now');
var windThreeDayFromToday = document.querySelector('.wind-3-day-from-now');
var humidityThreeDayFromToday = document.querySelector('.humidity-3-day-from-now');
//4 days from today
var fourDayFromToday = document.getElementById('4-day-from-now')
var tempFourDayFromToday = document.querySelector('.temp-4-day-from-now');
var windFourDayFromToday = document.querySelector('.wind-4-day-from-now');
var humidityFourDayFromToday = document.querySelector('.humidity-4-day-from-now');
//5 days from today
var fiveDayFromToday = document.getElementById('5-day-from-now')
var tempFiveDayFromToday = document.querySelector('.temp-5-day-from-now');
var windFiveDayFromToday = document.querySelector('.wind-5-day-from-now');
var humidityFiveDayFromToday = document.querySelector('.humidity-5-day-from-now');





var APIKey = 'eb5b6e6998810d2cc4976506438f175c';





//function on search
function formSearchButton(event) {
  event.preventDefault();

  var searchInputVal = searchInput.value;

  if (!searchInputVal) {
    console.error('Enter the name of the city');
    return;
  }
  localStorage.setItem('city', searchInputVal)
  
  console.log(searchInputVal);
  searchAPI(searchInputVal);
  getForecast(searchInputVal);
}

function searchAPI() {

  var requestURL = 'https://api.openweathermap.org/data/2.5/weather?q=';


  fetch(requestURL + searchInput.value + '&appid=' + APIKey + '&units=imperial')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      console.log(data.main.temp + ' ℉')
      console.log(data.main.humidity + ' %')
      console.log(data.wind.speed + ' pmh')

      tempToday.textContent = data.main.temp + ' ℉';
      humidityToday.textContent = data.main.humidity + ' %';
      windToday.textContent = data.wind.speed + ' pmh';
      cityName.textContent = data.name
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

  fetch(locationURL + searchInput.value + '&appid=' + APIKey + '&units=imperial')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      console.log(data.list[2].dt_txt)
      console.log(data.list[2].main.temp)
      console.log(data.list[2].wind.speed)
      console.log(data.list[2].main.humidity)

      tempOneDayFromToday.textContent = data.list[2].main.temp + ' ℉';
      humidityOneDayFromToday.textContent = data.list[2].main.humidity + ' %';
      windOneDayFromToday.textContent = data.list[2].wind.speed + ' pmh';
      oneDayFromToday.textContent = data.list[2].dt_txt;

      tempTwoDayFromToday.textContent = data.list[10].main.temp + ' ℉';
      humidityTwoDayFromToday.textContent = data.list[10].main.humidity + ' %';
      windTwoDayFromToday.textContent = data.list[10].wind.speed + ' pmh';
      twoDayFromToday.textContent = data.list[10].dt_txt;

      tempThreeDayFromToday.textContent = data.list[18].main.temp + ' ℉';
      humidityThreeDayFromToday.textContent = data.list[18].main.humidity + ' %';
      windThreeDayFromToday.textContent = data.list[18].wind.speed + ' pmh';
      threeDayFromToday.textContent = data.list[18].dt_txt;

      tempFourDayFromToday.textContent = data.list[26].main.temp + ' ℉';
      humidityFourDayFromToday.textContent = data.list[26].main.humidity + ' %';
      windFourDayFromToday.textContent = data.list[26].wind.speed + ' pmh';
      fourDayFromToday.textContent = data.list[26].dt_txt;

      tempFiveDayFromToday.textContent = data.list[34].main.temp + ' ℉';
      humidityFiveDayFromToday.textContent = data.list[34].main.humidity + ' %';
      windFiveDayFromToday.textContent = data.list[34].wind.speed + ' pmh';
      fiveDayFromToday.textContent = data.list[34].dt_txt;
      console.log(data.list[34].dt_txt)
    })
}



function recentSearches() {
  
  var manySearches = localStorage.getItem('manySearches')
  var searchInputVal = searchInput.value;
  manySearches.push(searchInputVal);
  localStorage.setItem('recentSearches', JSON.stringify(manySearches))
  manySearches.sort((a, b) => b.score - a.score); //sorting scores from highest to lowest
  console.log(manySearches)
  for (var i = 0; i < 10; i++) {
    console.log(manySearches[i])
    if (manySearches[i] === undefined) {//stopping the loop if there are no previously saved scores in the local storage
      return
    }
    //creating element li to hold the score and the initial
    // var li = document.createElement("li");
    // li.textContent = manySearches[i]
    // li.setAttribute("data-index", i);
    // //appending li to the scorelist
    // searchList.append(li);
  }
}
recentSearches()
