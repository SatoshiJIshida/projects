import React from "react";
import HomeText from "../components/screenText/homeText";
import StartBtn from "../components/buttons/startBtn";
import HelpBtn from "../components/buttons/helpBtn";
import { Connections } from "../components/animation/bgPatterns";

/**
 * Home Screen
 */
class Home extends React.Component {
  render() {
    return (
      <div className="page">
        <div className="base-bg">
          <Connections />
          <div className="home-container">
            <HomeText />
            <div>
              <StartBtn />
              <HelpBtn />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
