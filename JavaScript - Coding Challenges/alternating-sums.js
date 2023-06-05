/**
 * Several people are standing in a row and need to be divided into two teams.
 * The first person goes into team 1, the second goes into team 2, the third goes
 * into team 1 again, the fourth into team 2, and so on.
 * You are given an array of positive integers - the weights of the people.
 * Return an array of two integers, where the first element is the total weight of team 1,
 * and the second element is the total weight of team 2 after the division is complete.
 * 
 * Example:
 * For a = [50, 60, 60, 45, 70], the output should be
 * solution(a) = [180, 105].
 * 
 * [execution time limit] 4 seconds (js)
 * [input] array.integer a
 * 
 * [output] array.integer
 * 
 * Tests passed: 10/10.
 */
function solution(a) {
    const team1 = a,
          team2 = [0],
          result = [];

    for (let i = a.length-1; i >= 0; i--) {
        if (i % 2 === 1) { // if odd.
            team2.unshift(team1.splice(i, 1)[0]);
        }
    }
    const reducer = ((prev, cur) => prev + cur);
    const sum1 = team1.reduce(reducer);
    const sum2 = team2.reduce(reducer);
    result.push(sum1, sum2);

    return result;
}