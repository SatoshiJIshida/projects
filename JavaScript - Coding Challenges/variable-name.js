/**
 * Correct variable names consist only of English letters, digits and underscores
 * and they can't start with a digit.
 * Check if the given string is a correct variable name.
 * 
 * [execution time limit] 4 seconds (js)
 * [input] string name
 * 
 * [output] boolean
 * true if name is a correct variable name, false otherwise.
 * 
 * Tests passed: 20/20.
 */
function solution(name) {
    const check = /^[a-zA-Z_0-9]+$/;
    const digit = /[0-9]/;
    if (digit.test(name[0])) return false;
    return check.test(name) ? true : false;
}