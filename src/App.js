import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

const API_endpoint = `https://api.openweathermap.org/data/2.5/weather?`;
const API_key = process.env.REACT_APP_WEATHER_API_KEY;

function App() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [responseData, setResponseData] = useState({});
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
    let finalAPIEndPoint = `${API_endpoint}lat=${latitude}&lon=${longitude}&appid=${API_key}`;
    axios.get(finalAPIEndPoint).then((response) => {
      /* setResponseData(response.data); */
      console.log(responseData);
    });
  }, [longitude, latitude]);

  return (
    <div className="App">
      <h1>{responseData.name}</h1>
    </div>
  );
}

export default App;
