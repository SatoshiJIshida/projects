/**
 * Implement the missing code, (return 'code here';).
 * You're given two integers, n and m. Find position of the rightmost bit in which they differ in
 * their binary representations (it is guaranteed that such a bit exists), counting from right to left.
 * Return the value of 2^position_of_the_found_bit (0-based).
 * 
 * Example:
 * For n = 11 and m = 13, the output should be
 * solution(n, m) = 2.
 * 11 = 1011, 13 = 1101, the rightmost bit in which they differ is the bit at position 1 (0-based)
 * from the right in the binary representations.
 * So the answer is 2^1 = 2.
 * 
 * [execution time limit] 4 seconds (js)
 * [input] integer n, integer m
 * 
 * [output] integer
 * 
 * Tests passed: 12/12.
 */
function solution(n, m) {
  return parseInt([n].map(() => {
    var result = 0;
    const differences = [];
    parseInt([m].map(() => {
      n = n.toString(2).split('').reverse().join('');
      m = m.toString(2).split('').reverse().join('');
      for (let i = 0; i < Math.max(n.length, m.length); i++) {
        if (n.charAt(i) !== m.charAt(i)) {
          differences.push(i);
          if (differences[0] > (n.length-1) || differences[0] > (m.length-1)) {
            result = 2 ** differences[differences.length-1];
          } else {
            result = 2 ** differences[0];
          }
        }
      }
    }));
    return result;
  }));
}