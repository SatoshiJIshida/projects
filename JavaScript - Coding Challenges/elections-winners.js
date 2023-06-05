/**
 * Given an array of the numbers of votes given to each of the candidates so far,
 * and an integer k equal to the number of voters who haven't cast their vote yet,
 * Find the number of candidates who still have a chance to win the election.
 * The winner of the election must secure strictly more votes than any other candidate.
 * If two or more candidates receive the same (maximum) number of votes, assume there
 * is no winner at all.
 * 
 * Example:
 * For votes = [2, 3, 5, 2] and k = 3, the output should be
 * solution(votes, k) = 2.
 * 
 * [execution time limit] 4 seconds (js)
 * [input] array.integer votes, integer k
 * 
 * [output] integer
 * 
 * Tests passed: 12/12.
 */
function solution(votes, k) {
    const max = Math.max.apply(null, votes);
    const occurs = votes.lastIndexOf(max) - votes.indexOf(max) + 1;
    let   count = 0;
    votes.sort();
    
    for (let i = 0; i < votes.length; i++) {
        votes[i] += k;
        if (votes[i] > max) {
            count++;
        }
        if (k === 0 && occurs === 1) {
            return 1;
        }
        if (k === 0 && occurs > 1) {
            return 0;
        }
    }
    return count;
}