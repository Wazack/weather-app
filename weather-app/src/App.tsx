import React, { useState } from 'react';
import './App.scss';
import SearchCity from './SearchCity/SearchCity';
import DisplayWeather from './DisplayWeather.tsx/DisplayWeather';

function App() {
	const [isLoaded, setIsLoaded] = useState(false);

    const [dataa , setdata] = useState({
        info : "",
        city : "Getting Data...",
        temperature : "Getting Data...",
        weather : "Getting Data...",
        icon : "",
        humidity : "Getting Data...",
        wind_speed : "Getting Data...",
        timestamp : "",
    });

	function success(pos: { coords: { latitude: any; longitude: any; }; }) {
    	setIsLoaded(true)
    }

    navigator.geolocation.getCurrentPosition(success);

	return(
		isLoaded?(<DisplayWeather dataa={dataa} setdata={setdata} />) : <SearchCity setIsLoaded={setIsLoaded} dataa={dataa} setdata={setdata} />
	)
}

export default App;
