/**
 * Determine if the given character is a digit or not.
 * 
 * [execution time limit] 4 seconds (js)
 * [input] char symbol
 * 
 * [output] boolean
 * true if symbol is a digit, false otherwise.
 * 
 * Tests passed: 21/21.
 */ 
function solution(symbol) {
    return parseInt(symbol) || parseInt(symbol) === 0 ? true : false;
}