/**
 * Given an array of strings, return another array containing all of its longest strings.
 * 
 * Example:
 * For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
 * solution(inputArray) = ["aba", "vcd", "aba"].
 * 
 * [execution time limit] 4 seconds (js)
 * [input] array.string inputArray
 * 
 * [output] array.string
 * Array of the longest strings, stored in the same order as in the inputArray.
 * 
 * Tests passed: 20/20.
 */
function solution(inputArray) {
    const result = [];
    
    if (inputArray.length === 1) return inputArray;

    const longest = inputArray.sort((a, b) => b.length - a.length);
    const longestLength = longest[0].length;
    
    for (let i = 0; i < longest.length; i++) {
        if (longest[i].length === longestLength) {
            result.push(longest[i]);
        }
    }
    return result;
}