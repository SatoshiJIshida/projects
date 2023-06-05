/**
 * Ticket numbers usually consist of an even number of digits.
 * A ticket number is considered lucky if the sum of the first
 * half of the digits is equal to the sum of the second half.
 * Given a ticket number n, determine if it's lucky or not.
 * 
 * Example:
 * For n = 1230, the output should be
 * solution(n) = true;
 * 
 * [execution time limit] 4 seconds (js)
 * [input] integer n
 * 
 * [output] boolean
 * true if n is a lucky ticket number, false otherwise.
 * 
 * Tests passed: 20/20.
 */
function solution(n) {
    const num = n.toString(),
          split = num.split(''),
          half = Math.ceil(split.length/2),
          first = split.splice(0, half),
          second = split.splice(-half);
    
    const firstNums = [], 
          secondNums = [];
    for (let i of first) firstNums.push(parseInt(i));
    for (let i of second) secondNums.push(parseInt(i)); 

    const reducer = (prev, cur) => prev + cur,
          sum1 = firstNums.reduce(reducer),
          sum2 = secondNums.reduce(reducer);
    
    return (sum1 === sum2 ? true: false);
}