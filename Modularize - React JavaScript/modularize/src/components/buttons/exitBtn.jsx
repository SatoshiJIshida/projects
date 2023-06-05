import React from "react";
import ReactDOM from "react-dom";
import "../../css/style.css";
import Home from "../../views/home";
import { resetScore } from "../../score/scoreSystem";

/**
 * Exit Button
 * @callback open
 */
const ExitBtn = ({ onClick = open }) => (
  <div>
    <button className="menu-btn" onClick={onClick} value="Exit">
      Exit
    </button>
  </div>
);

/**
 * Open Home Screen
 */
function open() {
  new resetScore();
  ReactDOM.render(
    <React.StrictMode>
      <Home />
    </React.StrictMode>,
    document.getElementById("root")
  );
}

export default ExitBtn;
