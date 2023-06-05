/**
 * Given an integer n, return the largest number that contains exactly n digits.
 * 
 * Example:
 * For n = 2, the output should be solution(n) = 99.
 * 
 * [execution time limit] 4 seconds (js)
 * [input] integer n
 * 
 * [output] integer
 * The largest integer of length n.
 * 
 * Tests passed: 9/9.
 */
function solution(n) {
	let result = '';
	for (let i = 1; i <= n; i++) {
	    if (i <= n) {
	        result += ''+9;
	    }
	}
	return parseInt(result);
}