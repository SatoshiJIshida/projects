/**
 * Given a string, find the number of different characters in it.
 * Example:
 * For s = "cabca", the output should be
 * solution(s) = 3.
 * There are 3 different characters a, b and c.
 * 
 * [execution time limit] 4 seconds (js)
 * [input] string s
 * 
 * [output] integer
 * 
 * Tests passed: 10/10.
 */
function solution(s) {
    const check = {};
    s.split('');
    for (let i = 0; i < s.length; i++) {
        !check[s[i]] ? check[s[i]] = true : false;
    }
    return Object.keys(check).length;
}