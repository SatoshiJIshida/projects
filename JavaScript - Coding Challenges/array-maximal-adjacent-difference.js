/**
 * Given an array of integers, find the maximal absolute difference between any two
 * of its adjacent elements.
 * 
 * Example:
 * For inputArray = [2, 4, 1, 0], the output should be
 * solution(inputArray) = 3.
 * 
 * [execution time limit] 4 seconds (js)
 * [input] array.integer inputArray
 * 
 * [output] integer
 * The maximal absolute difference.
 * 
 * Tests passed: 13/13.
 */ 
function solution(inputArray) {
    let   result = 0;
    const resultArray = [];

    for (let i = 0; i < inputArray.length; i++) {
        let a = [i];
        let x = [i + 1];
        let b = [i + 2];
        if (b < inputArray.length) {
            const diff1 = Math.abs(inputArray[x] - inputArray[a]);
            const diff2 = Math.abs(inputArray[x] - inputArray[b]);
            const maxEachIteration = Math.max(diff1, diff2);
            resultArray.push(maxEachIteration);
            result = Math.max(...resultArray);
        }
    }
    return result;
}