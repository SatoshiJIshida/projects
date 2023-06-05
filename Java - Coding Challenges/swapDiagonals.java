/**
 * The longest diagonals of a square matrix are defined as follows:
 * The first longest diagonal goes from the top left corner to the bottom right one;
 * The second longest diagonal goes from the top right corner to the bottom left one.
 * Given a square matrix, your task is to swap its longest diagonals by exchanging their
 * elements at the corresponding positions.
 * 
 * Example
 * For
 * matrix = [[1, 2, 3],
 *           [4, 5, 6],
 *           [7, 8, 9]]
 * the output should be
 * 
 * solution(matrix) = [[3, 2, 1],
 *                     [4, 5, 6],
 *                     [9, 8, 7]]
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

    if (n <= 3) {
        for (int i = 0; i < 1; i++) {
            for (int j = 0; j < n/2; j++) {
                int firstRow = matrix[i][j];
                matrix[i][j] = matrix[i][matrix[i].length - j - 1];
                matrix[i][matrix[i].length - j - 1] = firstRow;
                
                int lastRow = matrix[n-1][j];
                matrix[n-1][j] = matrix[n-1][matrix[n-1].length - j - 1];
                matrix[n-1][matrix[n-1].length - j - 1] = lastRow;
            }
        }
    }
    
    int j = 0;
    if (n > 3) {
        for (int i = 0; i < n; i++) {
            int firstRow = matrix[i][j];
            matrix[i][j] = matrix[i][matrix[i].length - j - 1];
            matrix[i][matrix[i].length - j - 1] = firstRow;
            
            int lastRow = matrix[n-1][j];
            matrix[n-1][j] = matrix[n-1][matrix[n-1].length - j - 1];
            matrix[n-1][matrix[n-1].length - j - 1] = lastRow;
       
            j++;
        }
    }
    
    return matrix;
}
