import React from "react";
import ReactDOM from "react-dom";
import Home from "./views/home";
import reportWebVitals from "./reportWebVitals";

/**
 * Render Index, For Specifying Which View Is The Default View For Launch
 */
ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
