import React from "react";
import ReactDOM from "react-dom";
import "../../css/style.css";
import Level3 from "../../views/level3";

/**
 * Level 3 Button
 * @callback open
 */
const Level3Btn = ({ onClick = open }) => (
  <div>
    <button className="menu-btn" onClick={onClick} value="OpenLevel3">
      Continue
    </button>
  </div>
);

/**
 * Open Level 3 Screen
 */
function open() {
  ReactDOM.render(
    <React.StrictMode>
      <Level3 />
    </React.StrictMode>,
    document.getElementById("root")
  );
}

export default Level3Btn;
