/**
 * Given a string, find the shortest possible string which can be
 * achieved by adding characters to the end of initial string to make
 * it a palindrome.
 * 
 * Example:
 * For st = "abcdc", the output should be
 * solution(st) = "abcdcba".
 * 
 * [execution time limit] 4 seconds (js)
 * [input] string st
 * 
 * [output] string
 * 
 * Tests passed: 22/22.
 */
function solution(st) {
    let process = '';
    if (st === st.split('').reverse().join('')) return st;
    for (let i = 0; i < st.length; i++) {
        process += st[i];
        const reverse = process.split('').reverse().join('');
        const check = st.concat(reverse);
        if (check === check.split('').reverse().join('')) {
            st = check;
            break;
        }
    }
    return st;
}