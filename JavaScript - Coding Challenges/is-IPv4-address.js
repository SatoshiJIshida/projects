/**
 * Given a string, find out if it satisfies the IPv4 address naming rules.
 * 
 * Example:
 * For inputString = "172.16.254.1", the output should be
 * solution(inputString) = true;
 * 
 * [execution time limit] 4 seconds (js)
 * [input] string inputString
 * 
 * [output] boolean
 * true if inputString satisfies the IPv4 address naming rules, false otherwise.
 * 
 * Tests passed: 41/41.
 */
function solution(inputString) {
    const pattern = /^[0-9.]+$/;
    const beginZero = /^[0]/;
    const splitNums = inputString.split('.');
    const rejoin = [];
    let   result = '';
    
    if ((splitNums.length < 4) || (splitNums.length > 4)) return false; // ipv4 has 4 ints in it.
    for (let i of splitNums) {
        if ((beginZero.test(i) === true) && (i.length > 1)) { 
            return false; // can be 0-255, but can't start with a 0 if length > 1, e.g. 01.
        }
        if ((parseInt(i) >= 0) && (parseInt(i) <= 255)) { // check elements are within range. ipv4 256bits per int.
            rejoin.push(i);
        }
        if (rejoin.length === splitNums.length) {
            result = rejoin.join('.');
        }
    }
    return pattern.test(result) ? true : false;
}