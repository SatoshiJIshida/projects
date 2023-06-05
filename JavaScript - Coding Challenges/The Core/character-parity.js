/**
 * Given a character, check if it represents an odd digit, an even digit or not a digit at all.
 * 
 * Example:
 * For symbol = '5', the output should be
 * solution(symbol) = "odd";
 * For symbol = '8', the output should be
 * solution(symbol) = "even";
 * For symbol = 'q', the output should be
 * solution(symbol) = "not a digit".
 * 
 * [execution time limit] 4 seconds (js)
 * [input] char symbol
 * 
 * [output] string
 * 
 * Tests passed: 13/13.
 */
function solution(symbol) {
    const digit = /\d/;
    
    if (digit.test(symbol)) {
        if (parseInt(symbol) % 2 === 0) {
            return 'even';
        } else if (parseInt(symbol) % 2 !== 0) {
            return 'odd';
        }
    } else {
        return 'not a digit';
    }
}