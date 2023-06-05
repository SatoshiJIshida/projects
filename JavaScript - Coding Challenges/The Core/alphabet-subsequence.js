/**
 * Check whether the given string is a subsequence of the plaintext alphabet.
 * 
 * Example:
 * For s = "effg", the output should be
 * solution(s) = false;
 * 
 * For s = "ace", the output should be
 * solution(s) = true;
 * 
 * For s = "bxz", the output should be
 * solution(s) = true.
 * 
 * [execution time limit] 4 seconds (js)
 * [input] string s
 * 
 * [output] boolean
 * 
 * Tests passed: 20/20.
 */
function solution(s) {
    const a = 'a'.charCodeAt(),
          z = 'z'.charCodeAt(),
          alphabet = [],
          check = {};
    
    for (let i = a; i <= z; i++) {
        alphabet.push(String.fromCharCode(i));
    }
    
    for (let i of s) {
        if (!check[i]) {
            check[i] = true;
        } else if (check[i]) {
            return false;
        }
    }
    
    const sSorted = s.split('').sort().join('');
    if (s === sSorted) {
        return true;
    } else {
        return false;
    }
}