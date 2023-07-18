import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="col">
        <div className="day">{day()}</div>
        <WeatherIcon code={props.data.weather[0].icon} size={30} />
        <div className="temperatures">
          <span className="max">{Math.round(props.data.temp.max)}°</span>
          <span className="min">{Math.round(props.data.temp.min)}°</span>
        </div>
      </div>
    </div>
  );
}
