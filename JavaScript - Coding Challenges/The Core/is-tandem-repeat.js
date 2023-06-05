/**
 * Determine whether the given string can be obtained by one
 * concatenation of some string to itself.
 * 
 * Example:
 * For inputString = "tandemtandem", the output should be
 * solution(inputString) = true;
 * 
 * For inputString = "qqq", the output should be
 * solution(inputString) = false;
 * 
 * [execution time limit] 4 seconds (js)
 * [input] string inputString
 * 
 * [output] boolean
 * true if inputString represents a string concatenated to itself,
 * false otherwise.
 * 
 * Tests passed: 20/20.
 */
function solution(inputString) {
    if (inputString.length % 2 === 0) {
        const halfWay = (inputString.length/2),
              firstHalf = inputString.slice(0, halfWay),
              secondHalf = inputString.slice(halfWay, inputString.length);
        if (firstHalf === secondHalf) {
            return true;
        }
    }
    return false;
}