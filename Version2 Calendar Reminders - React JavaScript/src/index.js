import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Calendar from "./views/calendar";
import reportWebVitals from "./reportWebVitals";

/**
 * @author [Satoshi Ishida]
 */
ReactDOM.render(
  <React.StrictMode>
    <Calendar />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
