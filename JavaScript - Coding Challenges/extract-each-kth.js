/**
 * Given an array of integers, remove each kth element from it.
 * Example:
 * For inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and k = 3,
 * the output should be
 * solution(inputArray, k) = [1, 2, 4, 5, 7, 8, 10].
 * 
 * [execution time limit] 4 seconds (js)
 * [input] array.integer inputArray, integer k
 * 
 * [output] array.integer
 * inputArray without elements k - 1, 2k - 1, 3k - 1 etc.
 * 
 * Tests passed: 10/10.
 */
function solution(inputArray, k) {
    const remove = k-1;
    if (remove === 0) return [];
    for (let i = 1; i < inputArray.length; i++) {
        i % remove === 0 ? inputArray.splice(i, 1) : inputArray.splice(i, 0);
    }
    return inputArray;
}