import React from "react";
import ReactDOM from "react-dom";
import TimerEnds from "../views/timerEnds";

/**
 * Open Timer Ends Screen
 */
function openTimerEnds() {
  ReactDOM.render(
    <React.StrictMode>
      <TimerEnds />
    </React.StrictMode>,
    document.getElementById("root")
  );
}

export default openTimerEnds;
