import React from "react";
import ReactDOM from "react-dom";
import "../../css/style.css";
import Help from "../../views/help";

/**
 * Help Button
 * @callback open
 */
const HelpBtn = ({ onClick = open }) => (
  <div>
    <button className="menu-btn" onClick={onClick} value="OpenHelp">
      Help
    </button>
  </div>
);

/**
 * Open Help Screen
 */
function open() {
  ReactDOM.render(
    <React.StrictMode>
      <Help />
    </React.StrictMode>,
    document.getElementById("root")
  );
}

export default HelpBtn;
