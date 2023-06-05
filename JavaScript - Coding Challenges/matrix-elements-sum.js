/**
 * Given matrix, a rectangular matrix of integers, where each value represents the cost
 * of a room, your task is to return the total sum of all rooms that are suitable for
 * the CodeBots (ie: add up all the values that don't appear below a 0).
 * 
 * Example:
 * matrix = [[0, 1, 1, 2], 
 *           [0, 5, 0, 0], 
 *           [2, 0, 3, 3]]
 * the output should be
 * solution(matrix) = 9.
 * 
 * [execution time limit] 4 seconds (js)
 * [input] array.array.integer matrix
 * 
 * [output] integer
 * The total price of all the rooms that are suitable for the CodeBots to live in.
 * 
 * Tests passed: 20/20.
 */ 
function solution(matrix) {
    let result = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] === 0 && row + 1 < matrix.length) {
                matrix[row + 1][col] = 0;
            }
            result += matrix[row][col];
        }
    }
    return result;
}