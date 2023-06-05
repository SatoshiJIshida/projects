import React, { useState, useEffect } from "react";
import "../index.css";
import { day } from "../helpers/day";
import { Forecast } from "./forecast-data";

var locate: string = "";

/**
 * Today location and weather.
 * @author [Satoshi Ishida]
 */
const Today = () => {
  const xhr: XMLHttpRequest = new XMLHttpRequest();

  const [location, setLocation] = useState("Locating...");
  const [country, setCountry] = useState("");
  const [weather, setWeather] = useState(Object);
  const [check, setCheck] = useState(false); // check weather data was fetched.
  const [clicked, setClicked] = useState(false); // check btn was clicked.

  /**
   * Parent function getCoordinates() ->
   * If geolocation is successful for user, then calls success(), which calls getLocation()
   * else it calls error().
   */
  function getCoordinates() {
    const options: Object = {
      enableHighAccuracy: true,
      timeout: 5000, // the amount of time before the error callback is invoked.
      maximumAge: 0, // maximum cached position age.
    };

    /**
     * If successful in getting user location.
     * @param {object} pos - the user's position data
     */
    function success(pos: any) {
      const crd: any = pos.coords;
      const lat: number = crd.latitude;
      const long: number = crd.longitude;
      const coordinates: Array<number> = [lat, long];
      console.log(`Latitude: ${lat}, Longitude: ${long}`);
      getLocation(coordinates);
      return;
    }

    /**
     * If unsuccessful in getting the user location.
     * @param err - error status
     */
    function error(err: any) {
      console.warn(`ERROR(${err.code}); ${err.message}`);
      setLocation("Unable to retrieve your location");
      locate = location;
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }

  /**
   * getLocation -> fetches location data.
   * @param {object} coordinates - user location coordinates
   */
  function getLocation(coordinates: Array<number>) {
    const lat: number = coordinates[0]; // lat horizontal.
    const long: number = coordinates[1]; // long vertical.
    // Using LocationIQ.
    xhr.open(
      // open() initializes a request.
      "GET",
      "https://us1.locationiq.com/v1/reverse.php?key=pk.02bc6b0c0ff276b8b043dc1804f6b1c0&lat=" +
        lat +
        "&lon=" +
        long +
        "&format=json",
      true
    );
    xhr.send(); // send() sends the request.
    xhr.onreadystatechange = processRequest; // onready is event handler, calls processRequest().
    xhr.addEventListener("readystatechange", processRequest, false); // also, the standard events listener (type, listener, option (false so handler is called on bubbling))
  }

  /**
   * processRequest is called from getLocation() event listener.
   * This is the listener function that runs on event.
   */
  function processRequest() {
    if (xhr.readyState === 4 && xhr.status === 200) { // 4 means DONE and 200 means Successful response.
      const response: any = JSON.parse(xhr.responseText); // get the response text.
      const town: string = response.address.town;
      const city: string = response.address.city;
      const country: string = response.address.country;

      if (country === "United Kingdom") {
        setCountry("GB");
      } else {
        setCountry(country);
      }

      if (town) {
        setLocation(town);
        locate = location; // so that we can export this into the weekly forecast.
      } else if (!town && city) {
        setLocation(city); // if user is in a city and not a town.
        locate = location;
      } else {
        return;
      }
    }
  }

  /**
   * getWeather from open weather map API.
   * @returns {object} result - JSON object of weather details or error
   */
  async function getWeather() {
    try {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=9d5bdc3539df34107238c1d54d0712b0&units=metric`
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
        .then((object: Object) => {
          setWeather(object); // put this json data into weather state.
          setCheck(true);
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
    // ?. is the optional chaining operator to read the value of the property located deep within a chain
    // of connected objects without having to check that each reference in the chain is valid.
    const icon: string = weather?.weather[0]?.icon; // get the weather icon image.
    const link: string = "http://openweathermap.org/img/w/" + icon + ".png"; // we can use the icon id in the url to get the image.

    return (
      <div id="icon">
        <img src={link} alt="weather icon" />
      </div>
    );
  }

  /**
   * getTemp from JSON data in weather state.
   * @returns {string} temp - today's temp in degrees celsius.
   */
  function getTemp() {
    return (
      <div>
        <p>{weather?.main?.temp}°C</p>
      </div>
    );
  }

  /**
   * getWeatherInfo -> get remaining data that I want to use from the JSON data in the weather state.
   * @returns {string} main     - description of weather for today.
   * @returns {string} temp_max - max temp for today.
   * @returns {string} temp_min - min temp for today.
   * @returns {string} humidity - humidity for today.
   */
  function getWeatherInfo() {
    const main: string = weather?.weather[0]?.main; // get the weather type data.
    return (
      <div>
        <p>{main}</p>
        <p>High: {weather?.main?.temp_max}°C</p>
        <p>Low: {weather?.main?.temp_min}°C</p>
        <p>Humidity: {weather?.main?.humidity}%</p>
      </div>
    );
  }

  function onClick() {
    if (location != "Locating..." && "Unable to retrieve your location") {
      setClicked(true);
      getWeather();
    } else {
      return;
    }
  }

  function hide() {
    const show: string = "btnDay";
    const hide: string = "hide";
    if (clicked === true) {
      return hide;
    } else {
      return show;
    }
  }

  useEffect(() => {
    getCoordinates(); // get location on mount.
  });

  return (
    <React.Fragment>
      <div className="dayContainer">
        <div className="dayData">
          {/* Title */}
          <h1>
            Today: {day()[0]} | {location} {country}
          </h1>

          {/* Development button */}
          <button className={hide()} onClick={onClick}>
            Get Weather
          </button>

          {/* Weather Info */}
          {check === true ? getWeatherInfo() : null}
        </div>

        <div className="dayIcon">
          {/* Icon */}
          {check === true ? getIcon() : null}
        </div>

        <h1 className="dayTemp">
          {/* Temp Info */}
          {check === true ? getTemp() : null}
        </h1>

        <div>{check === true ? <Forecast /> : null}</div>
      </div>
    </React.Fragment>
  );
};

export { Today, locate };
