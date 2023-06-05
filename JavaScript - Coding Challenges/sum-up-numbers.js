/**
 * Write a function that returns the sum of numbers
 * that appear in the given inputString.
 * Example:
 * Input: inputString: "abcdefghijklmnopqrstuvwxyz1AbCdEfGhIjKlMnOpqrstuvwxyz23,74 -"
 * Expected Output: 98
 * 
 * [execution time limit] 4 seconds (js)
 * [input] string inputString
 * 
 * [output] integer
 * Tests passed: 15/15.
 */
function solution(inputString) {
    const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
          minus = '-',
          extractNums = [],
          reducer = ((a, b) => {
            return a + b
          });
    let   processNum = '',
          result = 0;

    for (let i = 0; i < inputString.length; i++) {
        if (nums.includes(inputString[i])) {
            if (inputString[i - 1] === minus) {
                processNum = minus.concat(processNum);
            }
            processNum += inputString[i];
            if (!nums.includes(inputString[i + 1])) {
                extractNums.push(parseInt(processNum));
                processNum = '';
            }
        }
    }
    return extractNums.length > 0 ? result = extractNums.reduce(reducer) : 0;
}