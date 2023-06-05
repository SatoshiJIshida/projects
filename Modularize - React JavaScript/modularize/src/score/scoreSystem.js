import { currentScore } from "../views/level3";
import openScores from "../helpers/openScores";
import openTransition1 from "../helpers/openTransition1";
import openTransition2 from "../helpers/openTransition2";

var score = 0;

/**
 * Handle Level 1 Score
 * @returns {int} score
 */
function handleScoreLevel1() {
  score += 2000;
  console.log("currentScore: " + score);
  levelTransition();
  return score;
}

/**
 * Handle Level 2 Score
 * @returns {int} score
 */
function handleScoreLevel2() {
  score += 3000;
  console.log("currentScore: " + score);
  levelTransition();
  return score;
}

/**
 * Handle Level 3 Score
 * @returns {int} score
 */
function handleScoreLevel3() {
  score = currentScore; // because Level3 deals with the states for the timed score.
  levelTransition();
  return score;
}

/**
 * Get Score For Display In Score Screen
 * @returns {int} score
 */
function getScore() {
  return score;
}

/**
 * Determine Level Transition on Score Amount
 */
function levelTransition() {
  if (score === 2000) {
    // Level 1 score amount.
    openTransition1();
  } else if (score === 5000) {
    // Level 1 + 2 score amount.
    openTransition2();
  } else if (score > 5000) {
    // Level 3 score amount.
    openScores();
  } else {
    return;
  }
}

/**
 * Reset Score
 * @returns {int} score
 */
function resetScore() {
  score = 0;
  console.log("currentScore: " + score);
  return score;
}

/**
 * Restart Level 1 Score
 * @returns {int} score
 */
function restartLevel1() {
  score -= 2000; // Set to whatever the level 1 score increase is.
  console.log("currentScore: " + score);
  return score;
}

/**
 * Restart Level 2 Score
 * @returns {int} score
 */
function restartLevel2() {
  score -= 3000; // Set to whatever the level 2 score increase is.
  console.log("currentScore: " + score);
  return score;
}

/**
 * Restart Level 3 Score
 * @returns {int} score
 */
function restartLevel3() {
  score = 5000; // set score as level 1 + 2 scores.
  console.log("currentScore: " + score);
  return score;
}

export {
  handleScoreLevel1,
  handleScoreLevel2,
  handleScoreLevel3,
  getScore,
  levelTransition,
  score,
  resetScore,
  restartLevel1,
  restartLevel2,
  restartLevel3,
};
