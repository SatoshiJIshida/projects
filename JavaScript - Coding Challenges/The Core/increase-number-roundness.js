/**
 * Define an integer's roundness as the number of trailing zeroes in it.
 * Given an integer n, check if it's possible to increase n's roundness by swapping some pair of its digits.
 * 
 * Example:
 * For n = 902200100, the output should be
 * solution(n) = true.
 * 
 * One of the possible ways to increase roundness of n is to swap digit 1 with digit 0 preceding it:
 * roundness of 902201000 is 3, and roundness of n is 2.
 * 
 * [execution time limit] 4 seconds (js)
 * [input] integer n
 * 
 * [output] boolean
 * true if it's possible to increase n's roundness, false otherwise.
 * 
 * Tests passed: 20/20.
 */ 
function solution(n) {
    const nums = ['1','2','3','4','5','6','7','8','9'],
          toStr = ''+n,
          ints = toStr.split('');
    for (let i = 0; i < ints.length; i++) {
        if (ints[i] === '0' && nums.includes(ints[i+1])) {
            return true;
        }
    }
    return false;
}