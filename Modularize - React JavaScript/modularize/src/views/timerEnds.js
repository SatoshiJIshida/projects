import React from "react";
import TimerEndsText from "../components/screenText/timerEndsText";
import ReplayLevel3Btn from "../components/buttons/replayLevel3Btn";
import ExitBtn from "../components/buttons/exitBtn";

/**
 * Timer Ends Screen (when Level 3 time runs out)
 */
class TimerEnds extends React.Component {
  render() {
    return (
      <div className="page">
        <div className="base-bg">
          <div className="timerEnds-container">
            <TimerEndsText />
            <div>
              <ReplayLevel3Btn />
              <ExitBtn />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TimerEnds;
