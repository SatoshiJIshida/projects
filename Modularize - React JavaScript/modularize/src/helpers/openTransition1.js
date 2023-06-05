import React from "react";
import ReactDOM from "react-dom";
import LevelTransition1 from "../views/levelTransition1";

/**
 * Open Level Transition 1 Screen
 */
function openTransition1() {
  ReactDOM.render(
    <React.StrictMode>
      <LevelTransition1 />
    </React.StrictMode>,
    document.getElementById("root")
  );
}

export default openTransition1;
