import React from "react";
import "../../css/style.css";

/**
 * Timer Ends Text For Timer Ends Screen
 */
export default class TimerEndsText extends React.Component {
  render() {
    return (
      <div>
        <div className="h1-container">
          <div className="h1">Ran out of time!</div>
        </div>
        <div className="base-container">
          <div className="h2">Please try again :)</div>
        </div>
      </div>
    );
  }
}
