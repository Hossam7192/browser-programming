console.log("weather js loaded");
const cityText = document.getElementById("city");
const temperatureText = document.getElementById("temperature");
const windText = document.getElementById("wind");
const output = document.getElementById("output");

function log(message) {
  output.textContent += message + "\n";
}

function clearOutput() {
  output.textContent = "";
}

document.getElementById("btnKuopio").onclick = function () {
  loadWeatherByCity("Kuopio", 62.8924, 27.6770);
};

async function loadWeatherByCity(cityName, latitude, longitude) {
  clearOutput();

  try {
    const url =
      "https://api.open-meteo.com/v1/forecast?latitude=" +
      latitude +
      "&longitude=" +
      longitude +
      "&current=temperature_2m,wind_speed_10m";

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("HTTP Error: " + response.status);
    }

    const data = await response.json();

    const temperature = data.current.temperature_2m;
    const wind = data.current.wind_speed_10m;

    cityText.textContent = cityName;
    temperatureText.textContent = temperature + " °C";
    windText.textContent = wind + " km/h";


  } catch (error) {
    clearOutput();
    log("Error: " + error.message);
    cityText.textContent = "-";
    temperatureText.textContent = "-";
    windText.textContent = "-";
  }
}