import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather() {
  
  const [weather, setWeather] = useState({ready: false});
  function handleResponse(response) {
    setWeather({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      humidity: response.data.main.humidity,
      date:"Tuesday 15:40",
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
    
  }
  const apiKey = "701f06352d61835bc4fc894e7b084629";
  let city = "Harare";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  if (weather.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeholder="Enter City..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-4">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weather.city}</h1>
        <ul>
          <li>{weather.date}</li>
          <li className="text-capitalize">{weather.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img src={weather.iconUrl} alt={weather.description} />
              <span className="temperature">{weather.temperature}</span>
              <span className="unit">°C</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weather.humidity}%</li>
              <li>Wind: {weather.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return "Loading...";
  }
}
