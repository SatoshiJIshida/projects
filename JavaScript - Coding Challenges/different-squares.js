/**
 * Given a rectangular matrix containing only digits,
 * calculate the number of different 2 × 2 squares in it.
 * 
 * [execution time limit] 4 seconds (js)
 * [input] array.array.integer matrix
 * 
 * [output] integer
 * The number of different 2 × 2 squares in matrix.
 * 
 * Tests passed: 13/13.
 */
function solution(matrix) {
    const squares = [],
          check = {};
    let   count = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i < matrix.length - 1 && j < matrix[i].length - 1) {
                squares.push([matrix[i][j], matrix[i][j + 1], matrix[i + 1][j], matrix[i + 1][j + 1]]);
            }
        }
    }
    for (let i = 0; i < squares.length; i++) {
        if (!check[squares[i]]) {
            check[squares[i]] = true;
            count++;
        }
    }
    return count;
}