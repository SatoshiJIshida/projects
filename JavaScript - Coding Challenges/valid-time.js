/**
 * Check if the given string is a correct time representation of the 24-hour clock.
 * Example: time = "13:58"
 * 
 * [execution time limit] 4 seconds (js)
 * [input] string time
 * 
 * [output] boolean
 * true if the given representation is correct, false otherwise.
 * 
 * Tests passed: 22/22.
 */
function solution(time) {
    const one = parseInt(time.slice(0, 1));
    const two = parseInt(time.slice(1, 2));
    const three = parseInt(time.slice(3, 4));
    const four = parseInt(time.slice(4));
    return (((one === 2) && (two >= 0 && two <= 3)) || ((one >= 0 && one <= 1) &&
            (two >= 0 && two <= 9))) && ((three >= 0 && three <= 5) && (four >= 0 && four <= 9)) ?
            true : false;
}