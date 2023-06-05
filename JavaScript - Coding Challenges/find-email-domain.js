/**
 * Given a valid email address, find its domain part.
 * 
 * Example:
 * For address = "prettyandsimple@example.com", the output should be
 * solution(address) = "example.com";
 * 
 * [execution time limit] 4 seconds (js)
 * [input] string address
 * 
 * [output] string
 * 
 * Tests passed: 20/20.
 */
function solution(address) {
    const arr = [];
    let   ret = '';
    for (let i = 0; i < address.length; i++) {
        if (address.charAt(i) === '@') {
            arr.push(i);
        }
        ret = address.slice(arr[arr.length - 1] + 1);
    }
    return ret;
}