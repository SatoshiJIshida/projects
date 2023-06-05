import React from "react";
import LevelTransition1Text from "../components/screenText/levelTransition1Text";
import Level1SystemModal from "../components/screenText/level1SystemModal";
import Level2Btn from "../components/buttons/level2Btn";
import ReplayLevel1Btn from "../components/buttons/replayLevel1Btn";
import ExitBtn from "../components/buttons/exitBtn";
import ConfettiAnimation from "../components/animation/confetti";
import Teacher2 from "../components/animation/teacher2";

/**
 * Level Transition Screen After Level 1 Is Completed
 */
class LevelTransition1 extends React.Component {
  render() {
    return (
      <div className="page">
        <div className="base-bg">
          <ConfettiAnimation />
          <div className="transition-container fadeIn2">
            <Teacher2 />
            <LevelTransition1Text />
            <div>
              <Level2Btn />
              <Level1SystemModal />
              <ReplayLevel1Btn />
              <ExitBtn />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LevelTransition1;
