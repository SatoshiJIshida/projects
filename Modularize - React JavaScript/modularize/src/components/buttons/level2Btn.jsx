import React from "react";
import ReactDOM from "react-dom";
import "../../css/style.css";
import Level2 from "../../views/level2";

/**
 * Level 2 Button
 * @callback open
 */
const Level2Btn = ({ onClick = open }) => (
  <div>
    <button className="menu-btn" onClick={onClick} value="OpenLevel2">
      Continue
    </button>
  </div>
);

/**
 * Open Level 2 Screen
 */
function open() {
  ReactDOM.render(
    <React.StrictMode>
      <Level2 />
    </React.StrictMode>,
    document.getElementById("root")
  );
}

export default Level2Btn;
