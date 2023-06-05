/**
 * Given a positive integer number and a certain length, we need to modify
 * the given number to have a specified length. We are allowed to do that either
 * by cutting out leading digits (if the number needs to be shortened) or by adding
 * 0s in front of the original number.
 * 
 * Example:
 * For number = 1234 and width = 2, the output should be
 * solution(number, width) = "34";
 * 
 * For number = 1234 and width = 4, the output should be
 * solution(number, width) = "1234";
 * 
 * For number = 1234 and width = 5, the output should be
 * solution(number, width) = "01234".
 * 
 * [execution time limit] 4 seconds (js)
 * [input] integer number
 * [input] integer width
 * 
 * [output] string
 * 
 * Tests passed: 14/14.
 */
function solution(number, width) {
    let result = '';
    number = String(number).split('');
    
    for (let i = number.length-1; i >= 0; i--) {
        if (width > 0) {
            result += number[i];
            width--;
        }
        if (i === 0) {
            while (width > 0) {
                result += 0;
                width--;
            }
        }
    }
    result = result.split('').reverse().join('');
    return result;
}