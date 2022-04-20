function CurrentWeather({responseData}) {
  return (
    <div className="app">
    <div className="container">
      <div className="top">
        <div className="location">
          <p>{responseData.name}</p>
        </div>
        <div className="temp">
          {responseData.main ? <h1>{responseData.main.temp.toFixed()}°C</h1> : null}
        </div>
        <div className="description">
            <div>
            {responseData.weather &&
        <p>{responseData.weather[0].main}</p>
        }
        </div>
          {responseData.weather && <img src={`http://openweathermap.org/img/wn/${responseData.weather[0].icon}@2x.png`}></img>}
          </div>
      {responseData.name != undefined && (
        <div className="bottom">
          <div className="feels">
            {responseData.main ? (
              <p className="bold">{responseData.main.feels_like.toFixed()}°C</p>
            ) : null}
            <p>Feels like</p>
          </div>
          <div className="humidity">
            {responseData.main ? <p className="bold">{responseData.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {responseData.wind ? (
              <p className="bold">{responseData.wind.speed.toFixed()} M/S</p>
            ) : null}
            <p>Wind Speed</p>
          </div>
        </div>
        
      )}
                <div className="sunriseset">
              <p id="sun">Sunrise</p>
              {responseData.sys &&  
              <p id="sun">{new Date(responseData.sys.sunrise * 1000).toLocaleTimeString('en-GB')}</p>}
              <p id="sun">Sunset</p>
              {responseData.sys && 
              <p id="sun">{new Date(responseData.sys.sunset * 1000).toLocaleTimeString('en-GB')}</p>}
              
          </div>
    </div>
  </div>
  </div>
  
)}

 {/* {responseData.weather[0].main}  */}


export default CurrentWeather
