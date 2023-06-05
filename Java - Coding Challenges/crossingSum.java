/**
 * Given a rectangular matrix and integers a and b, consider the union of the ath row and the bth
 * (both 0-based) column of the matrix (i.e. all cells that belong either to the ath row or to the
 * bth column, or to both). Return sum of all elements of that union.
 * 
 * Example
 * For
 * matrix = [[1, 1, 1, 1], 
 *           [2, 2, 2, 2], 
 *           [3, 3, 3, 3]]
 * a = 1, and b = 3, the output should be
 * solution(matrix, a, b) = 12.
 * 
 * Here (2 + 2 + 2 + 2) + (1 + 3) = 12.
 * 
 * [execution time limit] 3 seconds (java)
 * [input] array.array.integer matrix
 * [input] integer a
 * [input] integer b
 * 
 * [output] integer
 * 
 * Tests passed: 13/13.
 */
int solution(int[][] matrix, int a, int b) {
    int sum = 0;
    
    for (int i = 0; i < matrix.length; i++) {
        for (int j = 0; j < matrix[0].length; j++) {
            if (i == a || j == b) {
                sum += matrix[i][j];
            }
        }
    }
    return sum;
}
