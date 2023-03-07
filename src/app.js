function displayTemperature(response) {
  console.log(response.data);
  console.log(response.data.temperature.feels_like);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let conditionsElement = document.querySelector("#conditions");
  let feelElement = document.querySelector("#feel");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  conditionsElement.innerHTML = response.data.condition.description;
  feelElement.innerHTML = Math.round(response.data.temperature.feels_like);
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}
let apiKey = "be8of109b6t500324a628a4f8a83394b";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=Austin&key=be8of109b6t500324a628a4f8a83394b&units=imperial";

axios.get(apiUrl).then(displayTemperature);
