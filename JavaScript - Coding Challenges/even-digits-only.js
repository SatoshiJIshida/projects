/**
 * Check if all digits of the given integer are even.
 * 
 * [execution time limit] 4 seconds (js)
 * [input] integer n
 * 
 * [output] boolean
 * true if all digits of n are even, false otherwise.
 * 
 * Tests passed: 20/20.
 */
function solution(n) {
    const nums = (''+n).split('');
    const check = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            check.push(nums[i]);
        }
    }
    return check.length === nums.length ? true: false;
}