import React from "react";
import ReactDOM from "react-dom";
import Score from "../views/score";

/**
 * Open Scores Screen
 */
function openScores() {
  ReactDOM.render(
    <React.StrictMode>
      <Score />
    </React.StrictMode>,
    document.getElementById("root")
  );
}

export default openScores;
