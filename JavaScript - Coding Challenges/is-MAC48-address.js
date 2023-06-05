/**
 * Check given string inputString whether it corresponds to MAC-48 address or not.
 * (e.g. 01-23-45-67-89-AB).
 * 
 * [execution time limit] 4 seconds (js)
 * [input] string inputString
 * 
 * [output] boolean
 * true if inputString corresponds to MAC-48 address naming rules, false otherwise.
 * 
 * Tests passed: 20/20.
 */
function solution(inputString) {
    const hex = /^[0-9-A-F]+$/;
    const check = inputString.charAt(inputString.length-1);
    return (inputString.length === 17) && hex.test(inputString) && (check !== '-') ? true : false;
}