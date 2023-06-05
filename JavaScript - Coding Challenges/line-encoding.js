/**
 * Given a string, return its encoding defined as follows:
 * For s = "aabbbc", the output should be
 * solution(s) = "2a3bc".
 * 
 * Example:
 * Input: s: "wwwwwwwawwwwwww"
 * Expected Output:"7wa7w"
 * 
 * [execution time limit] 4 seconds (js)
 * [input] string s
 * 
 * [output] string
 * Encoded version of s.
 * 
 * Tests passed: 19/19.
 */
function solution(s) {
    const arr = s.split(''),
          counts = [];
    let   check = 1,
          checkStr = '',
          count = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            check++;
        }
        if ((check > 1) && (arr[i] !== arr[i + 2])) {
            checkStr = check.toString();
            count = checkStr.concat(arr[i]);
            counts.push(count);
            check = 1;
            arr.splice(arr[i], 1);
        } else if (arr[i] !== arr[i + 1]) {
            counts.push(arr[i]);
        }
    }
    return counts.join('');
}