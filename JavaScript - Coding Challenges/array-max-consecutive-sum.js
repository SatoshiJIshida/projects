/**
 * Given array of integers, find the maximal possible sum of some of
 * its k consecutive elements.
 * 
 * Example:
 * For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be
 * solution(inputArray, k) = 8.
 * 
 * All possible sums of 2 consecutive elements are:
 * 2 + 3 = 5;
 * 3 + 5 = 8;
 * 5 + 1 = 6;
 * 1 + 6 = 7.
 * Thus, the answer is 8.
 * 
 * [execution time limit] 4 seconds (js)
 * [input] array.integer inputArray, integer k
 * 
 * [output] integer
 * The maximal possible sum.
 * 
 * Tests passed: 20/20.
 */
function solution(inputArray, k) {
    let calc = inputArray.slice(0, k).reduce((a,b) => a+b);
    let res = calc;
    for (let i = 0; i < inputArray.length-k; i++) {
        calc += inputArray[i+k] - inputArray[i];
        res = Math.max(res, calc);
    }
    return res;
}