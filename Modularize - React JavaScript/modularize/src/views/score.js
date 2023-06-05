import React from "react";
import ScoreText from "../components/screenText/scoreText";
import StartAgainBtn from "../components/buttons/startAgainBtn";
import Level3SystemModal from "../components/screenText/level3SystemModal";
import ReplayLevel3Btn from "../components/buttons/replayLevel3Btn";
import ExitBtn from "../components/buttons/exitBtn";
import ConfettiAnimation from "../components/animation/confetti";

/**
 * Score Screen
 */
class Score extends React.Component {
  render() {
    return (
      <div className="page">
        <div className="base-bg">
          <ConfettiAnimation />
          <div className="score-container fadeIn2">
            <ScoreText />
            <div>
              <StartAgainBtn />
              <Level3SystemModal />
              <ReplayLevel3Btn />
              <ExitBtn />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Score;
