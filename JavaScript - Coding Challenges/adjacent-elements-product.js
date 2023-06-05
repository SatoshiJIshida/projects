/**
 * Given an array of integers, find the pair of adjacent elements that has the largest product
 * and return that product.
 * 
 * Example:
 * For inputArray = [3, 6, -2, -5, 7, 3], the output should be
 * solution(inputArray) = 21.
 * 
 * [execution time limit] 4 seconds (js)
 * [input] array.integer inputArray
 * 
 * [output] integer
 * The largest product of adjacent elements.
 * 
 * Tests passed: 18/18.
 */
function solution(inputArray) {
    let product = 0,
        largest = 0;
    const output = [];

    for (let i = 0; i < inputArray.length - 1; i++) {
        product = inputArray[i] * inputArray[i + 1];
        output.push(product);
    }
    largest = Math.max(...output);
    return largest;
}