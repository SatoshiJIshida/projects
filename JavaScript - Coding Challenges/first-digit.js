/**
 * Find the leftmost digit that occurs in a given string.
 * Example:
 * For inputString = "var_1__Int", the output should be
 * solution(inputString) = '1';
 * 
 * [execution time limit] 4 seconds (js)
 * [input] string inputString
 * 
 * [output] char
 * 
 * Tests passed: 11/11.
 */
function solution(inputString) {
    const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let   res = '';
    const check = [];
    inputString.split('');

    for (let i = 0; i < inputString.length; i++) {
        if (nums.includes(parseInt(inputString[i]))) {
            res = inputString[i];
            check.push(res);
        }
    }
    return check[0];
}