import { useState } from 'react';
import SearchBar from '../Components/SearchBar/SearchBar';
import SocialConnect from '../Components/SocialConnect/SocialConnect';
import './DisplayWeather.scss'

function DisplayWeather(props: any) {
	const [pos , setpos] = useState(
        {city: "default", 
        latitude : 42.6886591, 
        longitude : 2.8948332}
    );

	function success(pos: { coords: { latitude: any; longitude: any; }; }) {
        setpos ({
            city : "",
            latitude : pos.coords.latitude,
            longitude : pos.coords.longitude
        });
    }

    navigator.geolocation.getCurrentPosition(success);

	if (props.dataa.weather === "Getting Data...") {     /* fetch ONLY ONCE */
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${pos.latitude}&lon=${pos.longitude}&lang=fr&appid=e46e0fbafc5076273c51ffb174510df0&units=metric`)
            .then(function(res) {
                if (res.ok) {
                    return res.json();
                }
            })
            .then(function(value) {
                console.log(value);
                console.log(value.city.name);
                props.setdata({
                    info : "test",
                    city : value.city.name,
                    temperature : value.list[0].main.temp,
                    weather : value.list[0].weather[0].main,
                    icon : value.list[0].weather[0].icon,
                    humidity : value.list[0].main.humidity,
                    wind_speed : value.list[0].wind.speed,
                    timestamp : value.list[0].dt,
                });
            })     
            .catch(function(err) {
                console.log(err);
            })
    }

	return (
		<div className="display-weather">
			<SearchBar />
			<div className='content'>
				<h3>Weather in {props.dataa.city}</h3>
				<h4>{props.dataa.temperature} °C</h4>
				<p><img src={`http://openweathermap.org/img/wn/${props.dataa.icon}@2x.png`}/> {props.dataa.weather}</p>
				<p>Humidity: {props.dataa.humidity}%</p>
				<p>Wind Speed: {props.dataa.wind_speed} km/h</p>
			</div>
			<SocialConnect />
		</div>
	)
}

export default DisplayWeather;