function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let conditionsElement = document.querySelector("#conditions");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  conditionsElement.innerHTML = response.data.condition.description;
}
let apiKey = "be8of109b6t500324a628a4f8a83394b";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=Austin&key=be8of109b6t500324a628a4f8a83394b&units=imperial";

axios.get(apiUrl).then(displayTemperature);
