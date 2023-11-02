
$(document).ready(function () {
  var today = dayjs();
  $('#today').text(today.format('MMM D, YYYY'));
})
var city = document.getElementById('city');
var cityName = document.querySelector('.city-name')
var searchButton = document.getElementById('search-button');
var searchInput = document.getElementById('search-input');

var searchList = document.querySelector('.recent-searches')
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

var todayWeatherIcon = document.querySelector('.today-icon');
var oneDayFromTodayWeatherIcon = document.getElementById('1-day-from-now-icon')
var twoDayFromTodayWeatherIcon = document.getElementById('2-day-from-now-icon')
var threeDayFromTodayWeatherIcon = document.getElementById('3-day-from-now-icon')
var fourDayFromTodayWeatherIcon = document.getElementById('4-day-from-now-icon')
var fiveDayFromTodayWeatherIcon = document.getElementById('5-day-from-now-icon')


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
  recentSearches()
}
//function calls API for current weather
function searchAPI(cityValue) {

  var requestURL = 'https://api.openweathermap.org/data/2.5/weather?q=';


  fetch(requestURL + cityValue + '&appid=' + APIKey + '&units=imperial')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      console.log(data.main.temp + ' ℉')
      console.log(data.main.humidity + ' %')
      console.log(data.wind.speed + ' pmh')

      tempToday.textContent = " " + data.main.temp + ' ℉';
      humidityToday.textContent = " " + data.main.humidity + ' %';
      windToday.textContent = " " + data.wind.speed + ' pmh';
      cityName.textContent = data.name
      todayWeatherIcon.src = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '.png'

      //creates list item
      var listItem = document.createElement('li');

      listItem.textContent = data.name;
      listItem.onclick = historySearch

      //Append the li element to the ul element.
      searchList.appendChild(listItem);

    })
}
function historySearch() {
  console.log(this.textContent)
  searchAPI(this.textContent);
  getForecast(this.textContent);
}

//eventlistener on click
searchButton.addEventListener('click', formSearchButton);
//function calls API for forecast
function getForecast(cityValue) {
  var locationURL = 'https://api.openweathermap.org/data/2.5/forecast?q='

  fetch(locationURL + cityValue + '&appid=' + APIKey + '&units=imperial')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      console.log(data.list[2].dt_txt)
      console.log(data.list[2].main.temp)
      console.log(data.list[2].wind.speed)
      console.log(data.list[2].main.humidity)

      tempOneDayFromToday.textContent = " " + data.list[2].main.temp + ' ℉';
      humidityOneDayFromToday.textContent = " " + data.list[2].main.humidity + ' %';
      windOneDayFromToday.textContent = " " + data.list[2].wind.speed + ' pmh';
      oneDayFromToday.textContent = dayjs(data.list[2].dt_txt.split(" ")[0]).format('DD/MM/YYYY');

      tempTwoDayFromToday.textContent = " " + data.list[10].main.temp + ' ℉';
      humidityTwoDayFromToday.textContent = " " + data.list[10].main.humidity + ' %';
      windTwoDayFromToday.textContent = " " + data.list[10].wind.speed + ' pmh';
      twoDayFromToday.textContent = dayjs(data.list[10].dt_txt.split(" ")[0]).format('DD/MM/YYYY');

      tempThreeDayFromToday.textContent = " " + data.list[18].main.temp + ' ℉';
      humidityThreeDayFromToday.textContent = " " + data.list[18].main.humidity + ' %';
      windThreeDayFromToday.textContent = " " + data.list[18].wind.speed + ' pmh';
      threeDayFromToday.textContent = dayjs(data.list[18].dt_txt.split(" ")[0]).format('DD/MM/YYYY');

      tempFourDayFromToday.textContent = " " + data.list[26].main.temp + ' ℉';
      humidityFourDayFromToday.textContent = " " + data.list[26].main.humidity + ' %';
      windFourDayFromToday.textContent = " " + data.list[26].wind.speed + ' pmh';
      fourDayFromToday.textContent = dayjs(data.list[26].dt_txt.split(" ")[0]).format('DD/MM/YYYY');

      tempFiveDayFromToday.textContent = " " + data.list[34].main.temp + ' ℉';
      humidityFiveDayFromToday.textContent = " " + data.list[34].main.humidity + ' %';
      windFiveDayFromToday.textContent = " " + data.list[34].wind.speed + ' pmh';
      fiveDayFromToday.textContent = dayjs(data.list[34].dt_txt.split(" ")[0]).format('DD/MM/YYYY');
      console.log(data.list[34].dt_txt)

      oneDayFromTodayWeatherIcon.src = 'https://openweathermap.org/img/wn/' + data.list[2].weather[0].icon + '.png'
      twoDayFromTodayWeatherIcon.src = 'https://openweathermap.org/img/wn/' + data.list[10].weather[0].icon + '.png'
      threeDayFromTodayWeatherIcon.src = 'https://openweathermap.org/img/wn/' + data.list[18].weather[0].icon + '.png'
      fourDayFromTodayWeatherIcon.src = 'https://openweathermap.org/img/wn/' + data.list[26].weather[0].icon + '.png'
      fiveDayFromTodayWeatherIcon.src = 'https://openweathermap.org/img/wn/' + data.list[34].weather[0].icon + '.png'
    })
}



function recentSearches() {

  var manySearches = JSON.parse(localStorage.getItem('manySearches')) || []
  var searchInputVal = searchInput.value;
  manySearches.push(searchInputVal);
  localStorage.setItem('manySearches', JSON.stringify(manySearches))
  console.log(manySearches)
}

