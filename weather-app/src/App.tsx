import React, { useEffect, useState } from 'react';
import './App.scss';
import SearchCity from './SearchCity/SearchCity';
import DisplayWeather from './DisplayWeather.tsx/DisplayWeather';

function App() {
	const [isLoaded, setIsLoaded] = useState(false);
    const [pos , setpos] = useState(
        {city: "default", 
        latitude : 42.6886591, 
        longitude : 2.8948332}
    );
    const [dataa , setdata] = useState({
        info : "",
        city : "Getting Data...",
        temperature : "Getting Data...",
        weather : "Getting Data...",
        icon : "",
        humidity : "Getting Data...",
        wind_speed : "Getting Data...",
        timestamp : "",
        loaded: false,
    });

	function success(pos: { coords: { latitude: any; longitude: any; }; }) {
        setpos ({
            city : "",
            latitude : pos.coords.latitude,
            longitude : pos.coords.longitude
        });
        setIsLoaded(true);
    }
    
    if (dataa.city === 'Getting Data...') {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${pos.latitude}&lon=${pos.longitude}&lang=fr&appid=287db65e65ca60b08a6cdd8d7928a04b&units=metric`)
            .then(function(res) {
                if (res.ok) {
                    return res.json();
                }
            })
            .then(function(value) {
                console.log(value);
                console.log(value.city.name);
                setdata({
                    info : "test",
                    city : value.city.name,
                    temperature : value.list[0].main.temp,
                    weather : value.list[0].weather[0].main,
                    icon : value.list[0].weather[0].icon,
                    humidity : value.list[0].main.humidity,
                    wind_speed : value.list[0].wind.speed,
                    timestamp : value.list[0].dt,
                    loaded : true,
                });
            })     
            .catch(function(err) {
                console.log(err);
            })
    }
    
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success);
    })

	return(
		isLoaded?(<DisplayWeather setIsLoaded={setIsLoaded} isLoaded={isLoaded} dataa={dataa} setdata={setdata} />) : <SearchCity setIsLoaded={setIsLoaded} dataa={dataa} setdata={setdata} />
	)
}

export default App;
