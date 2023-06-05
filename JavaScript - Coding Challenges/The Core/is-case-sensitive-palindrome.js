/**
 * Given a string, check if it can become a palindrome
 * through a case change of some (possibly, none) letters.
 * 
 * Example:
 * For inputString = "AaBaa", the output should be
 * solution(inputString) = true.
 * "aabaa" is a palindrome as well as "AABAA", "aaBaa", etc.
 * 
 * [execution time limit] 4 seconds (js)
 * [input] string inputString
 * 
 * [output] boolean
 * 
 * Tests passed: 20/20.
 */
function solution(inputString) {
    const reversed = inputString.split('').reverse().join(''),
          one = inputString.toLowerCase(),
          two = reversed.toLowerCase();
    if (one === two) {
        return true;
    } else {
        return false;
    }
}