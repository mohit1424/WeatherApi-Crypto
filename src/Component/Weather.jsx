import React from 'react'
import './Weather.css'
import search from '/src/assets/search.svg'
import cloudSun from '/src/assets/cloudSun.svg'
import wind from '/src/assets/wind.png'
import humidity from '/src/assets/humidity.svg'


function Weather() {

 const handlechange=(e)=>{
       e.target.value;
 }

  return (
    <div className='container'>
    <div className='main'>
      <div className='pre-main'>
        <input onChange={handlechange} className='input' type="text" placeholder='Search your place'/>
        <img className='search-logo' src={search} alt="" />
      </div>
      <div className='cloudSun-main'>
        <img className='cloud-sun' src={cloudSun} alt="Cloud-SunImage" />
      </div>
      <h2 className='heading1'>temperature</h2>
      <p className='p1'>Gwalior,India</p>

      <div className='show-weather'>
        <div className='humidity1'>
        <img className='humidity-image' src={humidity} alt="" />
        <p>28%</p>
        <p>Humidity</p>
        </div>

         <div className='wind1'>
        <img className='wind-image' src={wind} alt="" />
        <p>18.12</p>
        <p>Wind Speed</p>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Weather
