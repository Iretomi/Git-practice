function dateFormat(date) {
  let day = date.getDay();
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0$ {hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0 {minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return `${days[day]} ${hours}:${minutes}`;
}

let currentDate = document.querySelector("#date");
let currentTime = new Date();
currentDate.innerHTML = dateFormat(currentTime);

function displayWeatherCondition(response) {
  console.log(response.data);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temps").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#Humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

function searcher(event) {
  event.preventDefault();
  let apiKey = "93bee9258cceab16c69bf2803b39b8de";
  let Place = document.querySelector("#newCity").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=93bee9258cceab16c69bf2803b39b8de&${Place}&units=metric`;

  axios.get(apiUrl).then(displayWeatherCondition);

  let city = document.querySelector("#city");
  let newCity = document.querySelector("#newCity");
  city.innerHTML = newCity.value;
}
let search = document.querySelector("#search");
search.addEventListener("submit", searcher);
