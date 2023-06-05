import React, { useState } from "react";
import "../index.css";
import { locate } from "./today-data";
import { day } from "../helpers/day";

/**
 * Weather forecast for 5 days after today.
 * @author [Satoshi Ishida]
 */
const Forecast = () => {
  const [weather, setWeather] = useState(Object);
  const [check, setCheck] = useState(false); // check weather data was fetched.
  const [clicked, setClicked] = useState(false); // check btn was clicked.

  /**
   * getWeather from open weather map API.
   * @returns {object} result - JSON object of weather details or error
   */
  async function getWeather() {
    try {
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${locate}&appid=9d5bdc3539df34107238c1d54d0712b0&units=metric&cnt=5`
      )
        .then((result: any) => {
          if (result.ok) {
            console.log("Success: " + result.status); // 200 for success.
            return result.json();
          } else {
            console.log("Failure: " + result.status); // will be a different error code.
            return result.status;
          }
        })
        .then((object: any) => {
          setWeather(object); // put this json data into weather state.
          setCheck(true); // set true because weather data was successfully fetched.
        });
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  /**
   * getIcon from open weather map API.
   * @returns {object} img - weather icon
   */
  function getIcon() {
    const data: Array<Object> = [];

    if (check === true) { // we check if data was fetched.
      for (let i: number = 0; i < weather.list.length; i++) { // this needs to go here because outside of check, it might not exist yet.
        data.push(weather.list[i]); // equals gives you a combined array of the data, push gives you separate arrays for each day's data.
      }
      return data.map((i: any) => {
        const icon: Array<Object> = [];
        icon.push(i?.weather[0]?.icon); // get the weather icon image for day index.
        const link: string = "http://openweathermap.org/img/w/" + icon + ".png";
        return (
          <div className="forecastIcon">
            <img src={link} alt="weather icon" />
          </div>
        );
      });
    }
  }

  /**
   * getTemp from JSON data in weather state.
   * @returns {string} temp - today's temp in degrees celsius.
   */
  function getTemp() {
    const data: Array<Object> = [];

    if (check === true) {
      for (let i: number = 0; i < weather.list.length; i++) { // this needs to go here because outside of check, it might not exist yet.
        data.push(weather.list[i]);
      }
      return data.map((i: any) => {
        const temp: Array<Object> = [];
        temp.push(i?.main?.temp);
        return (
          <div className="forecastTemp">
            <p>{temp}°C</p>
          </div>
        );
      });
    }
  }

  /**
   * getWeatherInfo -> get remaining data that I want to use from the JSON data in the weather state.
   * @returns {string} main     - description of weather for today.
   * @returns {string} high     - max temp for today.
   * @returns {string} low      - min temp for today.
   * @returns {string} humidity - humidity for today.
   */
  function getWeatherInfo() {
    const data: Array<Object> = [];

    if (check === true) {
      for (let i: number = 0; i < weather.list.length; i++) { // this needs to go here because outside of check, it might not exist yet.
        data.push(weather.list[i]);
      }
      return data.map((i: any) => {
        const high: Array<Object> = i?.main?.temp_max;
        const low: Array<Object> = i?.main?.temp_min;
        const humidity: Array<Object> = i?.main?.humidity;

        const main: string = weather.list[i]?.weather[0]?.main; // get the weather type data.
        return (
          <div className="forecastData">
            <p>{main}</p>
            <p>High: {high}°C</p>
            <p>Low: {low}°C</p>
            <p>Humidity: {humidity}%</p>
          </div>
        );
      });
    }
  }

  function onClick() {
    setClicked(true);
    getWeather();
  }

  function hide() {
    const show: string = "btnForecast";
    const hide: string = "hide";
    if (clicked === true) {
      return hide;
    } else {
      return show;
    }
  }

  const getDays: Array<string> = [];

  for (let i: number = 1; i < day().length; i++) {
    // we get the next 5 days for the forecast.
    getDays.push(day()[i]);
  }

  return (
    <React.Fragment>
      {/* Development button */}
      <button className={hide()} onClick={onClick}>
        Get 5 Day Forecast
      </button>

      <div className="forecastContainer">
        <div>
          {getDays.map((i: string) => {
            return (
              <div key={i} className="daysContainer">
                {clicked === true ? <p className="days">{i}</p> : null}
              </div>
            );
          })}
        </div>

        <div>
          {/* Icon */}
          {clicked === true ? getIcon() : null}
        </div>

        <div>
          {/* Weather Info */}
          {clicked === true ? getWeatherInfo() : null}
        </div>

        <div>
          {/* Temp Info */}
          {clicked === true ? getTemp() : null}
        </div>
      </div>
    </React.Fragment>
  );
};

export { Forecast };
