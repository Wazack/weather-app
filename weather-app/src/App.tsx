import React, { useState } from 'react';
import './App.scss';
import SearchCity from './SearchCity/SearchCity';
import DisplayWeather from './DisplayWeather.tsx/DisplayWeather';

function App() {
	const [isLoaded, setIsLoaded] = useState(false);

	function success(pos: { coords: { latitude: any; longitude: any; }; }) {
        // setpos ({
        //     city : "",
        //     latitude : pos.coords.latitude,
        //     longitude : pos.coords.longitude
        // });
    	setIsLoaded(true)
    }

    navigator.geolocation.getCurrentPosition(success);

	return(
		isLoaded?(<DisplayWeather/>) : <SearchCity/>
	)
}

export default App;
