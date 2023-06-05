/**
 * You are given an array of integers representing coordinates of obstacles situated on a
 * straight line.
 * Assume that you are jumping from the point with coordinate 0 to the right.
 * You are allowed only to make jumps of the same length represented by some integer.
 * Find the minimal length of the jump enough to avoid all the obstacles.
 * 
 * Example:
 * For inputArray = [5, 3, 6, 7, 9], the output should be
 * solution(inputArray) = 4.
 * 
 * [execution time limit] 4 seconds (js)
 * [input] array.integer inputArray
 * 
 * [output] integer
 * The desired length.
 * 
 * Tests passed: 12/12.
 */
function solution(inputArray) {
    const max = Math.max(...inputArray);
    
    for (let i = 1; i < max; i++) {
        const div = inputArray.some(x => x % i === 0);
        if (!div) {
            return i;
        }
    }
    return max + 1;
}