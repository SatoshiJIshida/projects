/**
 * Given two strings, find the number of common characters between them.
 * 
 * Example:
 * For s1 = "aabcc" and s2 = "adcaa", the output should be
 * solution(s1, s2) = 3.
 * 
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 * 
 * [execution time limit] 4 seconds (js)
 * [input] string s1, string s2
 * 
 * [output] integer
 * 
 * Tests passed: 10/10.
 */
function solution(s1, s2) {
  let   count = 0;
  const array2 = s2.split('');
  
  for (let i = 0; i < s1.length; i++) {
    const j = array2.findIndex(elem => elem === s1[i]);
    if (j >= 0) {
      count++;
      array2.splice(j, 1);
    }
  }
  return count;
}