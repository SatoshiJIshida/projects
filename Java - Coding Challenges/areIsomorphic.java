/**
 * Two two-dimensional arrays are isomorphic if they have the same number of rows
 * and each pair of respective rows contains the same number of elements.
 * 
 * Given two two-dimensional arrays, check if they are isomorphic.
 * 
 * Example
 * For
 * array1 = [[1, 1, 1],
 *           [0, 0]]
 * and
 * array2 = [[2, 1, 1],
 *           [2, 1]]
 * 
 * the output should be
 * solution(array1, array2) = true;
 * 
 * [execution time limit] 3 seconds (java)
 * [input] array.array.integer array1
 * [input] array.array.integer array2
 * 
 * [output] boolean
 * 
 * Tests passed: 20/20.
 */
boolean solution(int[][] array1, int[][] array2) {
    int row1 = array1.length;
    int row2 = array2.length;
    int col1 = 0;
    int col2 = 0;
    boolean isIsomorphic = false;

    for (int[] innerArray : array1) {
        for (int val : innerArray) {
            if (val < 0) {
                return false;
            }
        }
    }

    if (row1 == row2) {
        for (int i = 0; i < row1; i++) {
            col1 = array1[i].length;
            col2 = array2[i].length;
            if (col1 != col2) {
                return false;
            }
        }
        isIsomorphic = true;
    }
    return isIsomorphic;
}
