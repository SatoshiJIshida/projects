/**
 * Implement the missing code, (return 'code here';).
 * Presented with the integer n, find the 0-based position of the second rightmost zero bit in its binary representation
 * (it is guaranteed that such a bit exists), counting from right to left.
 * Return the value of 2^position_of_the_found_bit.
 * 
 * Example:
 * For n = 37, the output should be
 * solution(n) = 8.
 * 37 = 100101. The second rightmost zero bit is at position 3 (0-based) from the right in the binary representation of n.
 * Thus, the answer is 2^3 = 8.
 * 
 * [execution time limit] 4 seconds (js)
 * [input] integer n
 * 
 * [output] integer
 * 
 * Tests passed: 10/10.
 */
function solution(n) {
  return parseInt([n].map((x) => {
      const conversion = x.toString(2),
            reverse = conversion.split('').reverse().join(''),
            refs = [];
      for (let i = 0; i < reverse.length; i++) {
        if (reverse[i] === '0') {
          refs.push(i);
        }
      }
      const result = 2 ** refs[1];
      return result;
  }));
}