/**
 * In tennis, the winner of a set is based on how many games each player wins.
 * The first player to win 6 games is declared the winner unless their opponent had already won 5 games,
 * in which case the set continues until one of the players has won 7 games.
 * Given two integers score1 and score2, your task is to determine if it is possible for a tennis set to be
 * finished with a final score of score1 : score2.
 * 
 * Example:
 * For score1 = 3 and score2 = 6, the output should be
 * solution(score1, score2) = true.
 * Since player 1 hadn't reached 5 wins, the set ends once player 2 has won 6 games.
 * 
 * [execution time limit] 4 seconds (js)
 * [input] integer score1, integer score2
 * 
 * [output] boolean
 * true if score1 : score2 represents a possible score for an ended set, false otherwise.
 * 
 * Tests passed: 20/20.
 */
function solution(score1, score2) {
    if (score1 < 5 && score2 === 6 || score2 < 5 && score1 === 6) {
        return true;
    } else if ((score1 === 5 || score1 === 6) && score2 === 7) {
        return true;
    } else if ((score2 === 5 || score2 === 6) && score1 === 7) {
        return true;
    } else {
        return false;
    }
}