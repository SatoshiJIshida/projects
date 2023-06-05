/**
 * Given a string, check if it is a palindrome.
 * Example:
 * For inputString = "aabaa", the output should be
 * solution(inputString) = true;
 * 
 * [execution time limit] 4 seconds (js)
 * [input] string inputString
 * 
 * [output] boolean
 * true if inputString is a palindrome, false otherwise.
 * 
 * Tests passed: 20/20.
 */
function solution(inputString) {
    if (inputString === inputString.split('').reverse().join('')) {
        return true;
    } else {
        return false;
    }
}