import React from "react";
import ReactDOM from "react-dom";
import "../../css/style.css";
import Level3 from "../../views/level3";
import { restartLevel3 } from "../../score/scoreSystem";

/**
 * Replay Level 3 Button
 * @callback open
 */
const replayLevel3Btn = ({ onClick = open }) => (
  <div>
    <button className="menu-btn" onClick={onClick} value="ReplayLevel3">
      Replay Level 3
    </button>
  </div>
);

/**
 * Open Level 3 Screen
 */
function open() {
  new restartLevel3();
  ReactDOM.render(
    <React.StrictMode>
      <Level3 />
    </React.StrictMode>,
    document.getElementById("root")
  );
}

export default replayLevel3Btn;
