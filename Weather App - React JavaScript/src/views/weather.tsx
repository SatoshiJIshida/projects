import React from "react";
import "../index.css";
import { Today } from "../components/today-data";

/**
 * Weather App View.
 * @author [Satoshi Ishida]
 */
class Weather extends React.Component {
  render() {
    return (
      <div className="parentContainer">
        <Today />
      </div>
    );
  }
}

export default Weather;
