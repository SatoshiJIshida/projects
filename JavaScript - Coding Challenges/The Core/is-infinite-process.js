/**
 * Given integers a and b, determine whether the following pseudocode results in an infinite loop
 * 
 * while a is not equal to b do
 *   increase a by 1
 *   decrease b by 1
 * Assume that the program is executed on a virtual machine which can store arbitrary long numbers and execute forever.
 * 
 * Example:
 * For a = 2 and b = 6, the output should be
 * solution(a, b) = false;
 * For a = 2 and b = 3, the output should be
 * solution(a, b) = true.
 * 
 * [execution time limit] 4 seconds (js)
 * [input] integer a, integer b
 * 
 * [output] boolean
 * true if the pseudocode will never stop, false otherwise.
 * 
 * Tests passed: 20/20.
 */
function solution(a, b) {
    const div = Math.abs(a-b);
    if (a > 0 && b > 0 && a < b && b > (a+1) && a % div !== 0 && b % div !== 0) {
        return false;
    } else if (a === b) {
        return false;
    } else {
        return true;
    }
}