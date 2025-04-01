import React, { useEffect, useRef, useState } from 'react'
import './Weather.css'
import searchlogo from '/src/assets/search.svg'
import cloudSun from '/src/assets/cloudSun.svg'
import wind from '/src/assets/wind.png'
import humidity from '/src/assets/humidity.svg'
import weatherRain from '/src/assets/weatherRain.svg'
import sun from '/src/assets/sun.svg'


function Weather() {

  const inputRef = useRef() ;

  const [weatherdata, setweatherdata] = useState(false);

  const allIcons = {
    "01d":cloudSun,
    "01n":sun,
    "02n":weatherRain,
    "02d":cloudSun,
    "03d":cloudSun,
    "03n":sun,
    "09d":weatherRain,
    "09n":cloudSun,
    "10d":cloudSun,
    "10n":sun,
    "13n":weatherRain,
    "13d":cloudSun
  }

  const search=async(city)=>{

    if(city===""){
      alert("Enter City Name");
      return;
    }
    try{
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_API_KEY}`;

          const response = await fetch(url);
          const data = await response.json();

          if(!response.ok){
            alert(data.message);
            return;
          }
          console.log(data);

          const icon = allIcons[data.weather[0].icon] || sun;

          setweatherdata({
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
            temperature: Math.floor(data.main.temp),
            location: data.name,
            icon: icon
          })

    } catch(error){
         setweatherdata(false);
         console.error("Error in fetching the data");
         
    }
  }

  useEffect(()=>{
      search("London");
  },[])


  return (
    <div className='container'>
    <div className='main'>
      <div className='pre-main'>
        <input ref={inputRef} className='input' type="text" placeholder='Search your place'/>
        <img className='search-logo' onClick={()=>search(inputRef.current.value)} src={searchlogo} alt="" />
      </div>

      {weatherdata?<>   <div className='cloudSun-main'>
        <img className='cloud-sun' src={weatherdata.icon} alt="Cloud-SunImage" />
      </div>
      <h2 className='heading1'>{weatherdata.temperature} ⁰C</h2>
      <p className='p1'>{weatherdata.location}</p>

      <div className='show-weather'>
        <div className='humidity1'>
        <img className='humidity-image' src={humidity} alt="" />
        <p>{weatherdata.humidity}</p>
        <p>Humidity</p>
        </div>

         <div className='wind1'>
        <img className='wind-image' src={wind} alt="" />
        <p>{weatherdata.windSpeed}</p>
        <p>Wind Speed</p>
        </div>
        </div></>:<></>}

   
    </div>
    </div>
  )
}

export default Weather
