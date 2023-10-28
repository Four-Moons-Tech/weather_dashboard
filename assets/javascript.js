
var city = $('#city'); //jquery to get city bt id
var state = $('#state');
var country = $('#country');
var searchFormEl = $('btn')

$('lat');//lattitude
$('lon')//longtitude



function searchApi() {
    var APIKey = eb5b6e6998810d2cc4976506438f175c
    var weatherURL = 'api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}'; //API Call if lat and lon are known
    weatherURL ='api.openweathermap.org/data/2.5/forecast?lat=' + $('lat') + '&'+ $('lon') + '={lon}&appid=' + APIKey; 

    var weatherURLByCity = 'api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}'; // API call by city
    weatherURLByCity = 'api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + APIKey; 

    var weatherURLByCityCountry = 'api.openweathermap.org/data/2.5/forecast?q={city name},{country code}&appid={API key}' ;  //API call by city and country
    weatherURLByCityCountry = 'api.openweathermap.org/data/2.5/forecast?q=' + city,country + '&appid=' + APIKey; 

    var weatherURLByCityStateCountry = 'api.openweathermap.org/data/2.5/forecast?q={city name},{state code},{country code}&appid={API key}';  //API call by City, State and Country
    weatherURLByCityStateCountry = 'api.openweathermap.org/data/2.5/forecast?q=' + city,state,country + '&appid=' + APIKey; 

    fetch(weatherURLByCity)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        console.log(data)


})
}
searchFormEl.addEventListener('click', searchButton);  

function searchButton(event) {
    event.preventDefault();
  
    var searchInputVal = document.querySelector('#search-input').value;
    searchInputVal = city; 

    console.log(city)
    
    
  
    // if (!city) {
    //   console.error('You need a search input value!');
    //   return;
    // }
  
    searchApi(city);
}

