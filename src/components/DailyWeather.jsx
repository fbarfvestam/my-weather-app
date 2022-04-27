function DailyWeather({responseData}) {


    function renderDaily() {
        let daily = []
        responseData.daily.forEach((item, index) => {
          if(daily.length < 5) {
            daily.push(<div key={index}><p className="time">{new Date(item.dt * 1000).toLocaleDateString('en-GB', {month: '2-digit', day: '2-digit'})}</p>
            <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}></img>
            <p className="mainweather">{item.weather[0].main}</p>
            <p>{item.temp.day.toFixed()}°</p></div>)
          } 
        })
        return daily
      }


  return (
    <div className="daily">
   {responseData.daily && renderDaily()}
    </div>
  )
}

export default DailyWeather