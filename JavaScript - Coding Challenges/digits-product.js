/**
 * Given an integer product, find the smallest positive (i.e. greater than 0) integer
 * the product of whose digits is equal to product. If there is no such integer, return -1 instead.
 * 
 * Example:
 * For product = 12, the output should be
 * solution(product) = 26;
 *
 * [execution time limit] 4 seconds (js)
 * [input] integer product
 * 
 * [output] integer
 * 
 * Tests passed: 18/18.
 */
function solution(product) {
    for (let i = 1; i < 10000; i++) {
        if ([...i.toString()].reduce((a, b) => a * b, 1) === product) {
            return i;
        }
    }
    return -1;
}