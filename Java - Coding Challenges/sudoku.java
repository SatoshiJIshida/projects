/**
 * Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with digits so that each column,
 * each row, and each of the nine 3 × 3 sub-grids that compose the grid contains all of the digits from 1 to 9.
 * This algorithm should check if the given grid of numbers represents a correct solution to Sudoku.
 * 
 * Example:
 * For -
 * grid = [[1, 3, 2, 5, 4, 6, 9, 8, 7],
 *         [4, 6, 5, 8, 7, 9, 3, 2, 1],
 *         [7, 9, 8, 2, 1, 3, 6, 5, 4],
 *         [9, 2, 1, 4, 3, 5, 8, 7, 6],
 *         [3, 5, 4, 7, 6, 8, 2, 1, 9],
 *         [6, 8, 7, 1, 9, 2, 5, 4, 3],
 *         [5, 7, 6, 9, 8, 1, 4, 3, 2],
 *         [2, 4, 3, 6, 5, 7, 1, 9, 8],
 *         [8, 1, 9, 3, 2, 4, 7, 6, 5]]
 * the output should be
 * solution(grid) = true;
 * 
 * [execution time limit] 3 seconds (java)
 * [input] array.array.integer grid
 * 
 * [output] boolean
 * true if the given grid represents a correct solution to Sudoku, false otherwise.
 * 
 * Tests passed: 21/21.
 */
boolean solution(int[][] grid) {
    int[] nums = {1,2,3,4,5,6,7,8,9};
    ArrayList<Integer> numsList = new ArrayList<Integer>();
    ArrayList<Integer> column = new ArrayList<Integer>();
    ArrayList<ArrayList<Integer>> rows = new ArrayList<ArrayList<Integer>>();
    ArrayList<ArrayList<Integer>> squares = new ArrayList<ArrayList<Integer>>();
    
    for (int i = 0; i < nums.length; i++) {
        numsList.add(nums[i]);
    }
    
    // column.
    for (int i = 0; i < grid.length; i++) {
        column.add(grid[i][0]);
    }

    Set<Integer> columnSet = new HashSet<Integer>(column);
    if (columnSet.size() != column.size()) {
        return false;
    }
    
    // row.
    for (int n = 0; n < 9; n++) {
        rows.add(new ArrayList<Integer>());
    }
    int k = 0;
    int ref = 0;
    for (int row = 0; row < grid.length; row++) {
        for (int col = 0; col < grid[row].length; col++) {
            if ((col < grid[row].length) && (k < 9)) {
                if (ref < 9) {
                    rows.get(k).add(grid[row][col]);
                    ref++;
                    Collections.sort(rows.get(k));
                }
                if (ref == 9) {
                    k++;
                    ref = 0;
                }
            }
        }
    }

    int countRows = 0;
    for (int i = 0; i < 9; i++) {
        if ((Arrays.equals(rows.get(i).toArray(), numsList.toArray()))) {
            countRows++;
        }
    }
    
    if (countRows != 9) {
        return false;
    }
    
    // squares.
    for (int n = 0; n < 9; n++) {
        squares.add(new ArrayList<Integer>());
    }
    int n = 0;
    for (int row = 0; row < grid.length; row++) {
        for (int col = 0; col < grid[row].length; col++) {
            if ((row < grid.length-2) && (col < grid[row].length-2) && (n < 9)) {
                squares.get(n).add(grid[row][col]);
                squares.get(n).add(grid[row][col+1]);
                squares.get(n).add(grid[row][col+2]); 
                squares.get(n).add(grid[row+1][col]);
                squares.get(n).add(grid[row+1][col+1]);
                squares.get(n).add(grid[row+1][col+2]);
                squares.get(n).add(grid[row+2][col]);
                squares.get(n).add(grid[row+2][col+1]);
                squares.get(n).add(grid[row+2][col+2]);
                Collections.sort(squares.get(n));
                col += 2;
                n++;
            }
            if (col == grid[row].length-1) {
                row += 2;
            }
        }
    }

    int countSquares = 0;
    for (int i = 0; i < 9; i++) {
        if ((Arrays.equals(squares.get(i).toArray(), numsList.toArray()))) {
            countSquares++;
        }
    }
    
    if (countSquares == 9) {
        return true;
    }
    return false;
}
