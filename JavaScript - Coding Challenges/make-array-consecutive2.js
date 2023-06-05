/**
 * Arrange statues from smallest to largest so that each statue will be bigger than the previous
 * one exactly by 1. We may need some additional statues to be able to accomplish that.
 * Figure out the minimum number of additional statues needed.
 * 
 * Example:
 * For statues = [6, 2, 3, 8], the output should be
 * solution(statues) = 3.
 * 
 * We need statues of sizes 4, 5 and 7.
 * 
 * [execution time limit] 4 seconds (js)
 * [input] array.integer statues
 * 
 * [output] integer
 * The minimal number of statues that need to be added to existing statues such that it contains
 * every integer size from an interval [L, R] (for some L, R) and no other sizes.
 * 
 * Tests passed: 10/10.
 */
function solution(statues) {
    statues.sort((a,b) => a-b);
    const n = statues.length;
    const count = statues[n-1] - statues[0]+1-n;
    return count;
}

/**
 * Second different solution.
 */
function solution(statues) {
    statues.sort((a,b) => a-b);
    const fill = [];
    for (let i = statues[0]; i <= statues[statues.length-1]; i++) {
        fill.push(i);
    }
    return fill.length === statues.length ? 0 : fill.length-statues.length;
}