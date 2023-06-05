import React from "react";
import LevelTransition2Text from "../components/screenText/levelTransition2Text";
import Level2SystemModal from "../components/screenText/level2SystemModal";
import Level3Btn from "../components/buttons/level3Btn";
import ReplayLevel2Btn from "../components/buttons/replayLevel2Btn";
import ExitBtn from "../components/buttons/exitBtn";
import ConfettiAnimation from "../components/animation/confetti";
import Teacher2 from "../components/animation/teacher2";

/**
 * Level Transition Screen After Level 2 Is Completed
 */
class LevelTransition2 extends React.Component {
  render() {
    return (
      <div className="page">
        <div className="base-bg">
          <ConfettiAnimation />
          <div className="transition-container fadeIn2">
            <Teacher2 />
            <LevelTransition2Text />
            <div>
              <Level3Btn />
              <Level2SystemModal />
              <ReplayLevel2Btn />
              <ExitBtn />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LevelTransition2;
