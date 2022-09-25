import React, { useEffect, useState } from "react";
import './Fetch.css';
import WindLogo from './assets/WindLogo.svg';
import WaterDrop from './assets/WaterDrop.svg';

function Fetch() {

    let days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

    const [isLoading, setIsLoading] = useState(false);

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
        loaded : false
    });

    function success(pos: { coords: { latitude: any; longitude: any; }; }) {
        setpos ({
            city : "",
            latitude : pos.coords.latitude,
            longitude : pos.coords.longitude
        });
    }

    navigator.geolocation.getCurrentPosition(success);
    
    if (dataa.weather === "Getting Data...") {     /* fetch ONLY ONCE */
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${pos.latitude}&lon=${pos.longitude}&lang=fr&appid=311ca6172a8a33eb553f813a39b53b47&units=metric`)
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
                    loaded : true
                });
            })     
            .catch(function(err) {
                console.log("err");
            })
    }

    var date = new Date();

    return (
            <div className="fetch">
                <div className="left">
                    <h1>{dataa.city}</h1>
                    <p>{days[date.getDay()]}</p>
                </div>
                <div className="right">
                    <img src={`http://openweathermap.org/img/wn/${dataa.icon}@2x.png`} />
                    <h2>{dataa.weather}</h2>
                    <p>{dataa.temperature}°C</p>
                    <div className="pressure">
                        <p><img src={WindLogo} />{dataa.wind_speed} km/h</p>
                        <p><img src={WaterDrop} />{dataa.humidity} %</p>
                    </div>
                </div>
            </div>
    )
}

export default Fetch;
