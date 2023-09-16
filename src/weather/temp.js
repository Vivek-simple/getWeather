import { React, useState,useEffect } from "react";
import './style.css'
import WeatherCard from "./weatherCard";
const Temp=()=> {
const [searchValue,setSearchValue]=useState("Bareilly")
const [info,setInfo]=useState({})

  const getInfo=async ()=>{
    try {
      let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=40387e47c4ad2bd88d990d6b99b0a2a1`
  const res=await fetch(url)
  const data=await res.json()
  const {temp,humidity,pressure}=data.main
  const {speed}=data.wind
  const {country,sunset}=data.sys
  const {name}=data
  const {main:weathermood}=data.weather[0]
  
   const weatherInfo={
    temp,
    humidity,
    pressure,
    country,
    sunset,
    speed,
    name,
    weathermood
   }
setInfo(weatherInfo)
    } catch (error) {
      console.log(error)
    }
  

  }
  useEffect(()=>{
getInfo()
  },[])
  return <>
<div className="wrap">
  <div className="search">
    <input type="search" placeholder="search..." id="search" className="searchTerm" value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}/>
    <button className="searchButton" onClick={getInfo}>Search</button>

  </div>

</div>
<WeatherCard info={info}/>
  </>
}

export default Temp;
