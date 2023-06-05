import React from "react";
import HelpText from "../components/screenText/helpText";
import HomeBtn from "../components/buttons/homeBtn";
import { Movements } from "../components/animation/bgPatterns";

/**
 * Help Screen
 */
class Help extends React.Component {
  render() {
    return (
      <div className="page">
        <div className="base-bg">
          <Movements />
          <div className="help-container">
            <HelpText />
            <div>
              <HomeBtn />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Help;
