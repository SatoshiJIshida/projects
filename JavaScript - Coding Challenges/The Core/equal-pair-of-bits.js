/**
 * Implement the missing code, (return 'code here';).
 * You're given two integers, n and m. Find position of the rightmost pair of equal bits in
 * their binary representations (it is guaranteed that such a pair exists), counting from right to left.
 * Return the value of 2^position_of_the_found_pair (0-based).
 * 
 * Example:
 * For n = 10 and m = 11, the output should be
 * solution(n, m) = 2.
 * 10 = 1010, 11 = 1011, the position of the rightmost pair of equal bits is the bit at
 * position 1 (0-based) from the right in the binary representations.
 * So the answer is 2^1 = 2.
 * 
 * [execution time limit] 4 seconds (js)
 * [input] integer n, integer m
 * 
 * [output] integer
 * 
 * Tests passed: 10/10.
 */
function solution(n, m) {
  return parseInt([n].map(() => {
    var result = 0;
    const binaryPattern = /^[0-1]+$/,
          indexes = [];
    parseInt([m].map(() => {
      if (!binaryPattern.test(n) && !binaryPattern.test(m)) {
        n = n.toString(2).split('').reverse().join('');
        m = m.toString(2).split('').reverse().join('');
      } else {
        n = n.toString().split('').reverse().join('');
        m = m.toString().split('').reverse().join('');
      }
      for (let i = 0; i < Math.max(n.length, m.length); i++) {
        if (n.length < m.length && n.charAt(i) !== m.charAt(i)) {
          indexes.push(n.length);
          result = 2 ** indexes[0];
        }
        if (n.charAt(i) === m.charAt(i)) {
          indexes.push(i);
          result = 2 ** indexes[0];
        }
      }
    }));
    return result;
  }));
}