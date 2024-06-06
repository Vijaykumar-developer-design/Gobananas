import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import { fetchWeather } from "./api";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

const App = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [cityNotFound, setCityNotFound] = useState(false);

  const handleSearch = async (searchTerm) => {
    setCity(searchTerm);
    setCityNotFound(false); // Reset the cityNotFound state for a new search

    const data = await fetchWeather(searchTerm);
    if (data) {
      setWeatherData(data);
      setCityNotFound(false);
    } else {
      setWeatherData(null);
      setCityNotFound(true);
    }
  };
  const handleInputChange = (inputValue) => {
    if (!inputValue.trim()) {
      // Check if the input is empty or only contains whitespace
      setWeatherData(null); // Clear the weather data
      setCity(""); // Clear the city
    }
  };

  return (
    <Container>
      <Typography
        align="center"
        variant="h4"
        gutterBottom
        style={{ marginTop: "10px" }}
      >
        Weather App
      </Typography>
      <SearchBar onSearch={handleSearch} onInputChange={handleInputChange} />
      {cityNotFound && (
        <Typography
          align="center"
          color="error"
          variant="h3"
          style={{ marginTop: "10px" }}
        >
          The city "{city}" was not found.
        </Typography>
      )}
      {!weatherData && !cityNotFound && (
        <Typography
          align="center"
          variant="h4"
          style={{ marginTop: "20px", color: "green" }}
        >
          Search for a city to get the weather information.
        </Typography>
      )}
      {weatherData && <WeatherCard weatherData={weatherData} />}
    </Container>
  );
};

export default App;
