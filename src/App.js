import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const apiKey = "820c5081f3260cea2fe0ce3dd6abddc1";

  const fetchWeatherData = async (loc) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}&units=metric`
      );
      setWeatherData([...weatherData, response.data]);
      setError("");
    } catch (err) {
      setError(
        "Unable to fetch weather data. Please check the location and try again."
      );
    }
  };

  const handleSearch = () => {
    if (location) {
      fetchWeatherData(location);
      setLocation("");
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const getWeatherEmoji = (description) => {
    const weatherEmojis = {
      "clear sky": "☀️",
      "few clouds": "🌤️",
      "scattered clouds": "☁️",
      "broken clouds": "☁️",
      "shower rain": "🌧️",
      rain: "🌧️",
      thunderstorm: "⛈️",
      snow: "❄️",
      mist: "🌫️",
    };
    return weatherEmojis[description] || "🌈";
  };
  const getBackgroundImage = (description) => {
    const weatherImages = {
      "clear sky":
        "https://res.cloudinary.com/dzaz9bsnw/image/upload/v1718530278/Premium_Photo___Blue_sky_background_with_area_for_copy_space__jos1oz.jpg",
      "few clouds":
        "https://res.cloudinary.com/dzaz9bsnw/image/upload/v1718530241/Blue_Sky_White_Clouds_Lake_Water_Reflection_Empty_Mirror_Background_Blue_Sky_And_White_Clouds_Advertising_Background_Sky_Background_Image_And_Wallpaper_for_Free_Download_u4zrh3.jpg",
      "scattered clouds":
        "https://res.cloudinary.com/dzaz9bsnw/image/upload/v1718530187/Download_Scattered_clouds_in_the_sky_indicating_a_change_in_weather__for_free_rywgji.jpg",
      "broken clouds":
        "https://res.cloudinary.com/dzaz9bsnw/image/upload/v1718530187/Download_Scattered_clouds_in_the_sky_indicating_a_change_in_weather__for_free_rywgji.jpg",
      "shower rain":
        "https://res.cloudinary.com/dzaz9bsnw/image/upload/v1718530136/9_Spiritual_Meanings_When_You_Dream_About_Rain_wkjcsh.jpg",
      rain: "https://res.cloudinary.com/dzaz9bsnw/image/upload/v1718530080/I_Need_to_Build_an_Ark_tyuc7x.jpg",
      thunderstorm:
        "https://res.cloudinary.com/dzaz9bsnw/image/upload/v1718530011/Electric_Storm_hvakrf.jpg",
      snow: "https://res.cloudinary.com/dzaz9bsnw/image/upload/v1718529932/13_Perfect_Snowflakes_Captured_in_Photos_sousli.jpg",
      mist: "https://res.cloudinary.com/dzaz9bsnw/image/upload/v1718529824/morning_mist_sfywup.jpg",
      haze: "https://res.cloudinary.com/dzaz9bsnw/image/upload/v1718530761/pexels-ben-mack-5708054_nmpbfg.jpg",
    };
    return weatherImages[description] || "";
  };

  return (
    <div className={`app-container ${darkMode ? "dark" : ""}`}>
      <div className="header">
        <h1>Weather App</h1>
        <button onClick={toggleDarkMode} className="mode-toggle">
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
      <div className="search-container">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter city name or zip code"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {error && <p className="error-message">{error}</p>}
      <div className="weather-info-container">
        {weatherData.map((data, index) => (
          <div
            key={index}
            className={`weather-info ${darkMode ? "weather-info-dark" : ""}`}
            style={{
              backgroundImage: `url(${getBackgroundImage(
                data.weather[0].description
              )})`,
              backgroundSize: "cover",
            }}
          >
            <h2>{data.name}</h2>
            <div className="temp-date-card">
              <p>{new Date().toLocaleString()}</p>
              <p>{data.main.temp} °C</p>
            </div>
            <p>Humidity: {data.main.humidity} %</p>
            <p>Wind Speed: {data.wind.speed} m/s</p>
            <p>
              Description: {data.weather[0].description}{" "}
              {getWeatherEmoji(data.weather[0].description)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
