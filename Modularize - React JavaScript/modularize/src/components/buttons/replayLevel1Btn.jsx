import React from "react";
import ReactDOM from "react-dom";
import "../../css/style.css";
import Level1 from "../../views/level1";
import { restartLevel1 } from "../../score/scoreSystem";

/**
 * Replay Level 1 Button
 * @callback open
 */
const ReplayLevel1Btn = ({ onClick = open }) => (
  <div>
    <button className="menu-btn" onClick={onClick} value="ReplayLevel1">
      Restart
    </button>
  </div>
);

/**
 * Open Level 1 Screen
 */
function open() {
  new restartLevel1();
  ReactDOM.render(
    <React.StrictMode>
      <Level1 />
    </React.StrictMode>,
    document.getElementById("root")
  );
}

export default ReplayLevel1Btn;
