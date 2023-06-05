import React from "react";
import ReactDOM from "react-dom";
import "../../css/style.css";
import Home from "../../views/home";

/**
 * Home Button
 * @callback open
 */
const HomeBtn = ({ onClick = open }) => (
  <div>
    <button className="menu-btn" onClick={onClick} value="Return">
      Return
    </button>
  </div>
);

/**
 * Open Home Screen
 */
function open() {
  ReactDOM.render(
    <React.StrictMode>
      <Home />
    </React.StrictMode>,
    document.getElementById("root")
  );
}

export default HomeBtn;
