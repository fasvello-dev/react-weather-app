import { useState } from "react";
import "./App.css";
import Search from "./components/search/search";
import CurrentWeather from "./components/search/current-weather/current-weather";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./api";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [currentForecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    );
    Promise.all([currentWeatherFetch, forecastFetch]).then(async (response) => {
      const weatherResponde = response[0].json();
      const forecastResponse = response[1].json();
    });
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather city="Londres" />
    </div>
  );
}

export default App;
