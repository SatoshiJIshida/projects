import React from "react";
import ReactDOM from "react-dom";
import LevelTransition2 from "../views/levelTransition2";

/**
 * Open Level Transition 2 Screen
 */
function openTransition2() {
  ReactDOM.render(
    <React.StrictMode>
      <LevelTransition2 />
    </React.StrictMode>,
    document.getElementById("root")
  );
}

export default openTransition2;
