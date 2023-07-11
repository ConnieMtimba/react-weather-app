import React from "react";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <form>
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeholder="Enter City..."
                className="form-control"
              />
            </div>
            <div className="col-4">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <h1>Harare</h1>
        <ul>
          <li>Tuesday 15:30</li>
          <li>Partly Cloudy</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Partly Cloudy"
            />
            8°C
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation:0%</li>
              <li>Humidity:73%</li>
              <li>Wind:26km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
