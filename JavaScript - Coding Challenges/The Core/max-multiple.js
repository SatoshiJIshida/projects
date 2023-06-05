/**
 * Given a divisor and a bound, find the largest integer N such that:
 * N is divisible by divisor.
 * N is less than or equal to bound.
 * N is greater than 0.
 * It is guaranteed that such a number exists.
 * 
 * Example:
 * For divisor = 3 and bound = 10, the output should be
 * solution(divisor, bound) = 9.
 * The largest integer divisible by 3 and not larger than 10 is 9.
 * 
 * [execution time limit] 4 seconds (js)
 * [input] integer divisor, integer bound
 * 
 * [output] integer
 * 
 * Tests passed: 26/26.
 */
function solution(divisor, bound) {
    const ref = divisor;
    let result = 0;
    while (divisor <= bound) {
        divisor += ref;
    }
    result = divisor - ref;
    return result;
}