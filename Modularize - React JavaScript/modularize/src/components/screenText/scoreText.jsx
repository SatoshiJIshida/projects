import React from "react";
import "../../css/style.css";
import { getScore } from "../../score/scoreSystem";

/**
 * Score Text for Score Screen
 */
export default class ScoreText extends React.Component {
  render() {
    return (
      <div>
        <div className="h1-container3">
          <div className="h1">Well done!</div>
          <div className="h3">You completed the game</div>
        </div>
        <div className="result-container">
          <div className="h3">SCORE: {getScore()} out of 10000</div>
          <div>
            <img
              src="./img/items/trophy.png"
              alt="Trophy"
              name="Trophy"
              width="200px"
              className="fadeRepeat"
            />
          </div>
        </div>
      </div>
    );
  }
}
