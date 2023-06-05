/**
 * The longest diagonals of a square matrix are defined as follows:
 * The first longest diagonal goes from the top left corner to the bottom right one;
 * The second longest diagonal goes from the top right corner to the bottom left one.
 * Given a square matrix, your task is to reverse the order of elements on both of its longest diagonals.
 * 
 * Example
 * For
 * matrix = [[1, 2, 3],
 *           [4, 5, 6],
 *           [7, 8, 9]]
 * the output should be
 * solution(matrix) = [[9, 2, 7],
 *                     [4, 5, 6],
 *                     [3, 8, 1]]
 * 
 * [execution time limit] 3 seconds (java)
 * [input] array.array.integer matrix
 * 
 * [output] array.array.integer
 * 
 * Tests passed: 12/12.
 */
int[][] solution(int[][] matrix) {
    int n = matrix.length;
    for (int i = 0; i < n/2; i++) {
        for (int j = 0; j < n; j++) {
            if (j == i || j == n-i-1) {
                int temp = matrix[i][j];
                matrix[i][j] = matrix[n-i-1][n-j-1];
                matrix[n-i-1][n-j-1] = temp;
            }
        }
    }
    return matrix;
}
