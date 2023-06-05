/**
 * Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it.
 * 
 * Example:
 * For -
 * matrix = [[1, 2, 1],
 *           [2, 2, 2],
 *           [2, 2, 2],
 *           [1, 2, 3],
 *           [2, 2, 1]]
 * the output should be
 * solution(matrix) = 6.
 *
 * [execution time limit] 3 seconds (java)
 * [input] array.array.integer matrix
 * 
 * [output] integer
 * The number of different 2 × 2 squares in matrix.
 * 
 * Tests passed: 13/13.
 */
int solution(int[][] matrix) {
    ArrayList<String> squares = new ArrayList<String>();
    HashMap<String, Boolean> check = new HashMap<String, Boolean>();
    int count = 0;
    
    for (int i = 0; i < matrix.length-1; i++) {
        for (int j = 0; j < matrix[i].length-1; j++) {
            if ((i < matrix.length-1) && (j < matrix[i].length-1)) {
                String one = String.valueOf(matrix[i][j]);
                String two = String.valueOf(matrix[i][j+1]);
                String three = String.valueOf(matrix[i+1][j]);
                String four = String.valueOf(matrix[i+1][j+1]);
                String square = one.concat(two).concat(three).concat(four);
                squares.add(square);
            }
        }
    }
    for (int i = 0; i < squares.size(); i++) {
        if (!check.containsKey((squares.get(i)))) {
            check.put(squares.get(i), true);
            count++;
        }
    }
    return count;
}
