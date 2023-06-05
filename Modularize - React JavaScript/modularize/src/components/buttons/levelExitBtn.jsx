import React from "react";
import ReactDOM from "react-dom";
import "../../css/style.css";
import Home from "../../views/home";
import { resetScore } from "../../score/scoreSystem";

/**
 * Level Exit Button
 * @callback open
 */
const LevelExitBtn = ({ onClick = open }) => (
  <div>
    <button className="side-btn" onClick={onClick} value="LevelExit">
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

export default LevelExitBtn;
