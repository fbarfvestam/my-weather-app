import React, { useEffect, useState } from "react"
import { map } from "rxjs/operators"
import DailyWeather from "./DailyWeather"

function CurrentWeather({responseData}) {


  function renderHourly() {
    let hourly = []
    responseData.hourly.forEach((item, index) => {
      if(index % 3 === 0 && hourly.length < 5) {
        hourly.push(<div key={index}><p>{new Date(item.dt * 1000).toLocaleTimeString('en-GB',{ hour: '2-digit', minute: '2-digit' })}</p>
        <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}></img>
        <p>{item.temp.toFixed()}°C</p></div>)
      } 
    })
    return hourly
  }


  return (
    <div className="app">
    <div className="container">
      <div className="top">
        <div className="location">
          <p>{responseData.timezone}</p>
        </div>
        <div className="temp">
          {responseData.current ? <h1>{responseData.current.temp.toFixed()}°C</h1> : null}
        </div>
        <div className="description">
            <div>
            {responseData.current &&
        <p>{responseData.current.weather[0].main}</p>
        }
        </div>
          {responseData.current && <img src={`http://openweathermap.org/img/wn/${responseData.current.weather[0].icon}@2x.png`}></img>}
          </div>
      {responseData.timezone != undefined && (
        <div className="bottom">
          <div className="feels">
            {responseData.current ? (
              <p className="bold">{responseData.current.feels_like.toFixed()}°C</p>
            ) : null}
            <p>Feels like</p>
          </div>
          <div className="humidity">
            {responseData.current ? <p className="bold">{responseData.current.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {responseData.current ? (
              <p className="bold">{responseData.current.wind_speed.toFixed()} M/S</p>
            ) : null}
            <p>Wind Speed</p>
          </div>
        </div>
        
      )}
                <div className="sunriseset">
              <p id="sun">Sunrise:</p>
              {responseData.current &&  
              <p id="sun">{new Date(responseData.current.sunrise * 1000).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}</p>}
              <p id="sun">Sunset:</p>
              {responseData.current && 
              <p id="sun">{new Date(responseData.current.sunset * 1000).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}</p>}
              
          </div>
          <div className="hourly">
            {responseData.hourly && renderHourly()}
          </div>
    </div>
    {responseData && <DailyWeather responseData={responseData} />}
  </div>
  </div>
  
)}




export default CurrentWeather
