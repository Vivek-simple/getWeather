import react, { useEffect ,useState} from 'react'
const WeatherCard=({info})=>{
    const [Weather,setWeatheState]=useState("")
    const {
        temp,
        humidity,
        pressure,
        country,
        sunset,
        speed,
        name,
        weathermood
       }=info

       let sec=sunset
       let date=new Date(sec*1000)
       let time=`${date.getHours()}:${date.getMinutes()}`

       useEffect(()=>{
        if (weathermood) {
            switch (weathermood) {
              case "Clouds":
                setWeatheState("wi-day-cloudy");
                break;
              case "Haze":
                setWeatheState("wi-fog");
                break;
              case "Clear":
                setWeatheState("wi-day-sunny");
                break;
              case "Mist":
                setWeatheState("wi-dust");
                break;
      
              default:
                setWeatheState("wi-day-sunny");
                break;
            }
          }
      
       },[weathermood])
       //console.log(weather)
    return<>
    <article className="widget">
  <div className="weatherIcon">
    <i className={`wi ${Weather}`}></i>

  </div>
  <div className="weatherInfo">
    <div className="temperature">
    <span >{temp}&deg;</span>
    </div>
    <div className="description">
      <div className="weatherCondition">{weathermood}</div>
      <div className="place">{name},{country}</div>
      
    </div>
  
  </div>
  <div className="date">{new Date().toLocaleString()} </div>
  <div className="extra-temp">
    <div className="temp-info-minmax">
      <div className="two-sided-section">
        <p><i className={"wi wi-day-sunny"}></i></p>
        <p className="extra-info-leftside">{time} PM<br />Sunset</p>
      </div>
      <div className="two-sided-section">
        <p><i className={"wi wi-humidity"}></i></p>
        <p className="extra-info-leftside">{humidity}<br />Humidity</p>
      </div>
    </div>
    <div className="weather-extra-info">
    <div className="two-sided-section">
        <p><i className={"wi wi-rain"}></i></p>
        <p className="extra-info-leftside">{pressure}<br />Pressure</p>
      </div>
      <div className="two-sided-section">
        <p><i className={"wi wi-strong-wind"}></i></p>
        <p className="extra-info-leftside">{speed} <br />Speed</p>
      </div>

    </div>
  </div>
  

</article>
    </>
}

export default WeatherCard