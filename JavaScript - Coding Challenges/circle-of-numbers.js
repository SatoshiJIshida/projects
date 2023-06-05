/**
 * Consider integer numbers from 0 to n - 1 written down along the circle in such a way
 * that the distance between any two neighboring numbers is equal (note that 0 and n - 1
 * are neighboring, too).
 * Given n and firstNumber, find the number which is written in the radially opposite
 * position to firstNumber.
 * 
 * [execution time limit] 4 seconds (js)
 * [input] integer n, integer firstNumber
 * 
 * [output] integer
 * 
 * Tests passed: 14/14.
 */ 
function solution(n, firstNumber) {
    let calc = 0;
    if (firstNumber > n/2) {
        calc = firstNumber - (n/2);
    }
    if (firstNumber <= n/2) {
        calc = firstNumber + (n/2);
    }
    if (firstNumber === n/2) {
        calc = firstNumber - (n/2);
    }
    return calc;
}