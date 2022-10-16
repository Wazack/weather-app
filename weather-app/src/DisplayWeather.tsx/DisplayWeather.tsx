import { useEffect, useState } from 'react';
import SearchBar from '../Components/SearchBar/SearchBar';
import SocialConnect from '../Components/SocialConnect/SocialConnect';
import './DisplayWeather.scss'

function DisplayWeather(props: any) {

	return (
		<div className="display-weather">
			<SearchBar setIsLoaded={props.setIsLoaded} dataa={props.dataa} setdata={props.setdata} />
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