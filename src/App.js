import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import CurrentWeather from "./components/CurrentWeather";

const API_endpoint = `https://api.openweathermap.org/data/2.5/onecall?`;
const API_key = process.env.REACT_APP_WEATHER_API_KEY;

function App() {
  const [responseData, setResponseData] = useState(null);
  let [units, setUnits] = useState("metric");
  const imperial = (e) => {
    setUnits("imperial");
    getPosition();
  };
  const metric = (e) => {
    setUnits("metric");
    getPosition();
  };
  async function getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        let finalAPIEndPoint = `${API_endpoint}lat=${lat}&lon=${long}&units=${units}&appid=${API_key}`;
        getWeatherByPosition(finalAPIEndPoint);
      });
    } else {
      return alert("Sorry, this app needs your position to work.");
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
  }, [units]);

  return (
    <div className="App">
      <button onClick={metric}>Change to Celsius</button>
      <button onClick={imperial}>Change to Fahrenheit</button>
      {responseData && <CurrentWeather responseData={responseData} />}
    </div>
  );
}

export default App;
