import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { format } from "date-fns";

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) return null;

  const dateTime = new Date(weatherData.dt * 1000); // Convert timestamp to JavaScript Date object
  const formattedDate = format(dateTime, "PPpp"); // Format the date and time

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">
          {weatherData.name}, {weatherData.sys.country}
        </Typography>
        <Typography variant="subtitle1">{formattedDate}</Typography>
        <Typography variant="h6">
          {weatherData.weather[0].description}
        </Typography>
        <Typography variant="h4">{weatherData.main.temp}°C</Typography>
        <Typography variant="body1">
          Humidity: {weatherData.main.humidity}%
        </Typography>
        <Typography variant="body1">
          Wind: {weatherData.wind.speed} m/s
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
