import React, { useEffect, useState } from "react";
import Weathercard from "./weathercard";
import "./weather.css";

const Weather = () => {
  const [searchValue, setSeachValue] = useState("lucknow");
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=102323aabbcdd84aaa7e204a22ca6714`;
      const res = await fetch(url);
      const data = await res.json();
      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;
      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };

      setTempInfo(myNewWeatherInfo);

      console.log(temp);
      console.log(pressure);
      console.log(humidity);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWeatherInfo();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="weatherPage">
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="Search..."
            autoFocus
            className="searchTerm"
            id="search"
            value={searchValue}
            onChange={(e) => setSeachValue(e.target.value)}
          />
          <button
            className="searchButton"
            type="button"
            onClick={getWeatherInfo}
          >
            Search
          </button>
        </div>
      </div>
      {/*Team Card*/}
      <Weathercard tempInfo={tempInfo} />
    </div> //This is my DIV
  );
};

export default Weather;
