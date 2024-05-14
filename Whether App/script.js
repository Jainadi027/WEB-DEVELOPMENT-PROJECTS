const apiKey = "d13b1424ff233a063f485794d4317004";

const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const locationElement = document.getElementById("location");
const temperatureElement = document.getElementById("temperature");
const conditionsElement = document.getElementById("conditions");
const weatherIconElement = document.getElementById("weather-icon");

searchBtn.addEventListener("click", async () => {
  const searchQuery = searchInput.value.trim();
  if (searchQuery) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=${apiKey}&units=metric`
      );
      const data = await response.json();

      const location = data.name;
      const temperature = Math.round(data.main.temp); // Round temperature to nearest integer
      const conditions = data.weather[0].description;
      const weatherIcon = data.weather[0].icon;

      locationElement.textContent = location;
      temperatureElement.textContent = `Temperature: ${temperature}°C`;
      conditionsElement.textContent = `Conditions: ${conditions}`;
      weatherIconElement.src = `http://openweathermap.org/img/w/${weatherIcon}.png`;
      weatherIconElement.alt = `Weather Icon for ${conditions}`;
    } catch (error) {
      console.error(error);
      alert("Error: Unable to fetch weather data. Please try again.");
    } finally {
      searchInput.value = ""; // Clear search input field
    }
  } else {
    alert("Please enter a valid city or zip code.");
  }
});
