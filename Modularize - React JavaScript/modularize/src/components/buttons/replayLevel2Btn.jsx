import React from "react";
import ReactDOM from "react-dom";
import "../../css/style.css";
import Level2 from "../../views/level2";
import { restartLevel2 } from "../../score/scoreSystem";

/**
 * Replay Level 2 Button
 * @callback open
 */
const ReplayLevel2Btn = ({ onClick = open }) => (
  <div>
    <button className="menu-btn" onClick={onClick} value="ReplayLevel2">
      Restart
    </button>
  </div>
);

/**
 * Open Level 2 Screen
 */
function open() {
  new restartLevel2();
  ReactDOM.render(
    <React.StrictMode>
      <Level2 />
    </React.StrictMode>,
    document.getElementById("root")
  );
}

export default ReplayLevel2Btn;
