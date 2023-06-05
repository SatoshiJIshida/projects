import React from "react";
import "../../css/style.css";

/**
 * Level Transition Text After Level 1
 */
export default class LevelTransition1Text extends React.Component {
  render() {
    return (
      <div>
        <div className="h1-container2">
          <div className="h1">Congratulations!</div>
        </div>
        <div className="base-container">
          <div className="h3">You completed Level 1!</div>
        </div>
      </div>
    );
  }
}
