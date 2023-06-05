import React from "react";
import Level1Btn from "../components/buttons/level1Btn";
import IntroText from "../components/screenText/introText";
import Teacher from "../components/animation/teacher";
import { Movements2 } from "../components/animation/bgPatterns";

/**
 * Intro Screen
 */
class Intro extends React.Component {
  render() {
    return (
      <div className="page">
        <div className="base-bg">
          <Movements2 />
          <div className="intro-container">
            <Teacher />
            <IntroText />
            <div className="center">
              <Level1Btn />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
