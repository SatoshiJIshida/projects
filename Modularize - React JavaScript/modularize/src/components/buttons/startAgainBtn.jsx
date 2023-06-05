import React from "react";
import ReactDOM from "react-dom";
import "../../css/style.css";
import Level1 from "../../views/level1";
import { resetScore } from "../../score/scoreSystem";

/**
 * Start Again Button
 * @callback open
 */
const startAgainBtn = ({ onClick = open }) => (
  <div>
    <button className="menu-btn" onClick={onClick} value="StartAgain">
      Start Again
    </button>
  </div>
);

/**
 * Open Level 1 Screen
 */
function open() {
  new resetScore();
  ReactDOM.render(
    <React.StrictMode>
      <Level1 />
    </React.StrictMode>,
    document.getElementById("root")
  );
}

export default startAgainBtn;
