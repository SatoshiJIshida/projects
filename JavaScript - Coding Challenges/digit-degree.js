/**
 * Let's define digit degree of some positive integer as the number of times we need 
 * to replace this number with the sum of its digits until we get to a one digit number.
 * Given an integer, find its digit degree.
 * 
 * Example:
 * For n = 91, the output should be
 * solution(n) = 2.
 * 9 + 1 = 10 -> 1 + 0 = 1.
 * 
 * [execution time limit] 4 seconds (js)
 * [input] integer n
 * 
 * [output] integer
 * 
 * Tests passed: 20/20.
 */
function solution(n) {
    const reducer = ((a, b) => a + b);
    let   digits = [],
          count = 0,
          res = 0;

    const sum = ((n) => {
        const strDigits = ('' + n).split('');

        if (strDigits.length === 1) return 0;

        for (let i = 0; i < strDigits.length; i++) {
            digits.push(parseInt(strDigits[i]));
        }

        res = digits.reduce(reducer);
        count++;
        digits = [];
        sum(res);
    });
    sum(n);
    return count;
}