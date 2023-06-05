import React from "react";
import ReactDOM from "react-dom";
import "../../css/style.css";
import Intro from "../../views/intro";

/**
 * Start Button
 * @callback open
 */
const startBtn = ({ onClick = open }) => (
  <div>
    <button className="menu-btn" onClick={onClick} value="OpenIntro">
      Start
    </button>
  </div>
);

/**
 * Open Intro Screen
 */
function open() {
  ReactDOM.render(
    <React.StrictMode>
      <Intro />
    </React.StrictMode>,
    document.getElementById("root")
  );
}

export default startBtn;
