import React from "react";
import ReactDOM from "react-dom";
import "../../css/style.css";
import Level1 from "../../views/level1";

/**
 * Level 1 Button
 * @callback open
 */
const Level1Btn = ({ onClick = open }) => (
  <div>
    <button className="intro-btn fadeIn1" onClick={onClick} value="OpenLevel1">
      Start Level 1
    </button>
  </div>
);

/**
 * Open Level 1 Screen
 */
function open() {
  ReactDOM.render(
    <React.StrictMode>
      <Level1 />
    </React.StrictMode>,
    document.getElementById("root")
  );
}

export default Level1Btn;
