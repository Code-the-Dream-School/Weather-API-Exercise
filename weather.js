var apiKey= '3d0135b74e3c5008acc04134506c96fb';
let lat 
let lon
let icon

var info = document.getElementById('info');
var city = document.getElementById('city');  
const button = document.getElementById('search')

const name = document.getElementById('name');
var country = document.getElementById('country');
var weather = document.getElementById('weather');


// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------
function fetchData(url) {
  return fetch(url)
      .then(checkStatus)
      .then(res => res.json())
      .catch(error => console.log('Looks like there was a problem!', error))
}
async function fetchWeather(city) {
  const cityUrl = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
  const response = await cityUrl;
  const jsonData = await response.json();
  console.log(jsonData);
   
  name.textContent = jsonData.name;
  country.textContent = jsonData.sys.country;
  weather.textContent = jsonData.weather[0].description;
  var lat = jsonData.coord.lat;
  var lon = jsonData.coord.lon;
  
  console.log(name);
  console.log(lat);
  console.log(lon);

};

async function fetchDaysWeather() {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`);
  const data_days = await response.json();
  days = data_days;
  console.log(days);
}


async function iconWeather(icon) {
  const iconUrl = 'https://openweathermap.org/weather-conditions#Weather-Condition';
  const response = await iconUrl;
  console.log(response);
}
iconWeather(icon);




// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------
function checkStatus(response) {
  if (response.ok) {
      return Promise.resolve(response);
  } else {
      return Promise.reject(new Error(response.statusText));
  }
}

// ------------------------------------------
//  EVENT LISTENERS FUNCTIONS
// ------------------------------------------
button.addEventListener('click', (event) => {
  
  fetchWeather(city.value);
  fetchDaysWeather();

});


















