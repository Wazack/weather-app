import React, {  useRef } from 'react';
import './SearchBar.scss'

function SearchBar(props: any) {
	const inputRef = useRef<HTMLInputElement>(null);


	function foundCity(e: any) {
		e.preventDefault();
		fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${inputRef.current?.value}&lang=fr&appid=287db65e65ca60b08a6cdd8d7928a04b&units=metric`)
			.then ((response) => response.json())
			.then((data) => {
				props.setdata({
					info : "test",
                    city : data.city.name,
                    temperature : data.list[0].main.temp,
                    weather : data.list[0].weather[0].main,
                    icon : data.list[0].weather[0].icon,
                    humidity : data.list[0].main.humidity,
                    wind_speed : data.list[0].wind.speed,
                    timestamp : data.list[0].dt,
					loaded : true,
                });
				console.log(data.city.name);
			})
            .catch(function(err) {
                console.log(err);
            })
		props.setIsLoaded(true);
		inputRef.current!.value = '';
	}

	return (
		<form>
			<input ref={inputRef} type="text" placeholder="Search..." required />
			<button onClick={foundCity}>
				<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g clip-path="url(#clip0_8_45)">
					<path d="M29.5898 25.9395L23.748 20.0977C23.4844 19.834 23.127 19.6875 22.752 19.6875H21.7969C23.4141 17.6191 24.375 15.0176 24.375 12.1875C24.375 5.45508 18.9199 0 12.1875 0C5.45508 0 0 5.45508 0 12.1875C0 18.9199 5.45508 24.375 12.1875 24.375C15.0176 24.375 17.6191 23.4141 19.6875 21.7969V22.752C19.6875 23.127 19.834 23.4844 20.0977 23.748L25.9395 29.5898C26.4902 30.1406 27.3809 30.1406 27.9258 29.5898L29.584 27.9316C30.1348 27.3809 30.1348 26.4902 29.5898 25.9395ZM12.1875 19.6875C8.04492 19.6875 4.6875 16.3359 4.6875 12.1875C4.6875 8.04492 8.03906 4.6875 12.1875 4.6875C16.3301 4.6875 19.6875 8.03906 19.6875 12.1875C19.6875 16.3301 16.3359 19.6875 12.1875 19.6875Z" fill="black"/>
					</g>
					<defs>
					<clipPath id="clip0_8_45">
					<rect width="30" height="30" fill="white"/>
					</clipPath>
					</defs>
				</svg>
			</button>
		</form>
	)
}

export default SearchBar;