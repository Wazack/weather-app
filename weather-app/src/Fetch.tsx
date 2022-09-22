import React, { useState } from "react";

function Fetch() {

    const [pos , setpos] = useState(
        {city: "default", 
        latitude : 51.509865, 
        longitude : -0.118092}
    );

    const [dataa , setdata] = useState({
        info : "",
        city : "Getting Data...",
        temperature : "Getting Data...",
        weather : "Getting Data...",
        icon : "",
        humidity : "Getting Data...",
        wind_speed : "Getting Data...",
        loaded : false
    });
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${pos.latitude}&lon=${pos.longitude}&appid=f364ca6111e487a98abe2b3558838684&units=metric`)
            .then((response) => response.json())
                .then(data => { setdata({
                    info : data.list,
                    city    : data.city.name,
                    temperature : data.list[0].main.temp,
                    weather : data.list[0].weather[0].main,
                    icon :   data.list[0].weather[0].icon ,
                    humidity : data.list[0].main.humidity,
                    wind_speed : data.list[0].wind.speed ,
                    loaded  : true
                })});
                        // console.log(data) ;

    return (
        <div>
            <h1>{dataa.city}</h1>
        </div>
    )
}

export default Fetch;