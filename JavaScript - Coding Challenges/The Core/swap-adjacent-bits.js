/**
 * Implement the missing code, (return 'code here';).
 * You're given an arbitrary 32-bit integer n. Take its binary representation, split bits into
 * it in pairs (bit number 0 and 1, bit number 2 and 3, etc.) and swap bits in each pair.
 * Then return the result as a decimal number.
 * 
 * Example:
 * For n = 13, the output should be
 * solution(n) = 14.
 * 13 = 1101 ~> {11}{01} ~> 1110 = 14.
 * 
 * [execution time limit] 4 seconds (js)
 * [input] integer n
 * 
 * [output] integer
 * 
 * Tests passed: 12/12.
 */
function solution(n) {
  return parseInt([n].map((x) => {
    let conversion = x.toString(2);
    const pairs = [];
    if (conversion.length % 2 === 1) {
      conversion = '0'+conversion;
    }
    for (let i = 0; i < conversion.length-1; i++) {
      const pair = conversion[i].concat(conversion[i+1]);
      const reverse = pair.split('').reverse().join('');
      pairs.push(reverse);
      i++;
    }
    const join = pairs.join('');
    const result = parseInt(join, 2);
    return result;
  }));
}