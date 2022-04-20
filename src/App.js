import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import CurrentWeather from "./components/CurrentWeather";

const API_endpoint = `https://api.openweathermap.org/data/2.5/weather?`;
const API_key = process.env.REACT_APP_WEATHER_API_KEY;

function App() {
  const [responseData, setResponseData] = useState({});
  async function getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        let finalAPIEndPoint = `${API_endpoint}lat=${lat}&lon=${long}&appid=${API_key}`;
        getWeatherByPosition(finalAPIEndPoint);
      });
    } else {
      alert("Application cannot be used without your position");
    }
  }
  async function getWeatherByPosition(url) {
    try {
      const response = await axios.get(url);
      setResponseData(response.data);
    } catch {
      console.log("error");
    }
  }
  // runs on init
  useEffect(() => {
    getPosition();
  }, []);
  // triggered when responsedata is changed
  useEffect(() => {
    console.log(responseData);
  }, [responseData]);

  return (
    <div className="App">
      <CurrentWeather responseData={responseData} />
    </div>
  );
}

export default App;
