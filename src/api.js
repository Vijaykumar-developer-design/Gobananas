const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchWeather = async (city) => {
  try {
    const response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();
    if (response.ok) {
      // console.log(data);
      return data;
    } else {
      throw new Error("Network response was not ok");
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};
