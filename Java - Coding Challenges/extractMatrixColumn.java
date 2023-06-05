/**
 * Given a rectangular matrix and an integer column, return an array containing
 * the elements of the columnth column of the given matrix (the leftmost column
 * is the 0th one).
 * 
 * Example
 * For
 * matrix = [[1, 1, 1, 2], 
 *           [0, 5, 0, 4], 
 *           [2, 1, 3, 6]]
 * 
 * and column = 2, the output should be
 * solution(matrix, column) = [1, 0, 3].
 * 
 * [execution time limit] 3 seconds (java)
 * [input] array.array.integer matrix
 * 
 * [output] array.integer
 * 
 * Tests passed: 12/12.
 */
int[] solution(int[][] matrix, int column) {
    ArrayList<Integer> collect = new ArrayList<Integer>();
    for (int row = 0; row < matrix.length; row++) {
        collect.add(matrix[row][column]);
    }
    int[] result = collect.stream().mapToInt(i -> i).toArray();
    return result;
}
