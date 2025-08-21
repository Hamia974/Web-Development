import Sun from './Assets/clear.png'
import search_icon from './Assets/search.png'
import cloud from './Assets/cloud.png'
import humidity from './Assets/humidity.png'
import wind from './Assets/wind.png'
import  clear from './Assets/clear.png'
import drizzle from './Assets/drizzle.png'
import rain from './Assets/rain.png'
import snow from './Assets/snow.png'

import { useEffect, useRef, useState } from 'react'
const Weather=()=>{
const inputData=useRef();
    const[weatherData,SetWeatherData]=useState(false);
    const allIcons={
        "01d":clear,
        "01n":clear,
          "02d":cloud,
        "02n":cloud, 
                 "03d":cloud,
        "03n":cloud,
"04d":drizzle,
        "04n":drizzle,
        "05d":cloud,
        "05n":cloud,
        "10d":rain,
        "10n":rain,
        "13d":snow,
        "13n":snow,
    }
const search = async(city)=>{
    if(city===""){
        alert("Enter City name");
        return;
    }
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_WEATHERAPP_ID}`;
        const response= await fetch (url);
        const data = await response.json();
        if(!response.ok){
            alert(data.message);
            return;
        }
        console.log(data);
        const icon=allIcons[data.weather[0].icon] || clear;
        SetWeatherData({
humidity:data.main.humidity,
windspeed:data.wind.speed,
temperature:Math.floor(data.main.temp),
location:data.name,
icon:icon
        })
    } catch (error) {
SetWeatherData(false);
console.error("Error in fetching data")
        
    }
}
useEffect(()=>{
    search("Lahore");
},[]);
    return(
        <div classname="">
<div className="bg-blue-900 w-[350px] h-[500px] border rounded-lg flex flex-col justify-center items-center m-auto mt-10">
<div className="flex justify-center gap-5">
    <input ref={inputData} type="text" className="bg-white border rounded-full p-2 " placeholder='search' />
    <img className="bg-white border rounded-full p-2" onClick={()=>search(inputData.current.value)} src={search_icon} alt="search icon" />
</div>
{weatherData?<>
<img src={weatherData.icon} alt="" />
<p className="text-5xl text-white font-bold m-2">{weatherData.temperature}°c</p>
<p className="text-3xl text-white font-bold font-serif m-2">{weatherData.location}</p>
<div className="flex gap-10 mt-3 ">
    <div>
          <div className='flex'>
        <img src={humidity} alt="" />
        <p className="text-xl text-white ml-2">{weatherData.humidity}%
        </p>
        </div>
        <p className=" font-serif text-sm text-white ml-12 mt-[-10px]">Humidity</p>
    </div>
        <div>
          <div className='flex'>
        <img src={wind} alt="" />
        <p className="text-xl text-white ml-2">{weatherData.windspeed} km/h
        </p>
        </div>
        <p className=" font-serif text-sm text-white ml-12 mt-[-13px]">Wind Speed</p>
    </div>
     
</div>
</> :<></>}



</div>
        </div>
    );
}
export default Weather;