const apiKey = 'af6d1bde3760d742704656542e0fbedf';

function getWeather() {
  const cityInput = document.getElementById('cityInput').value;

  if (cityInput === '') {
    alert('Please enter a city name.');
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

  console.log('API URL:', apiUrl);

  fetch(apiUrl)
    .then(response => {
      console.log('API Response:', response);
      return response.json();
    })
    .then(data => {
      console.log('Weather Data:', data);

      if (data.cod === '404') {
        alert('City not found. Please enter a valid city name.');
        return;
      }

      displayWeather(data);
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      alert('An error occurred. Please try again.');
    });
}

function displayWeather(data) {
  const weatherInfoDiv = document.getElementById('weatherInfo');

  const weatherHTML = `
    <h3>${data.name}, ${data.sys.country}</h3>
    <p>Temperature: ${data.main.temp} &#8451;</p>
    <p>Weather: ${data.weather[0].description}</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Wind Speed: ${data.wind.speed} m/s</p>
  `;

  weatherInfoDiv.innerHTML = weatherHTML;
}

