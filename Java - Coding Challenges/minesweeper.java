/**
 * In the popular Minesweeper game you have a board with some mines and those cells that don't contain
 * a mine have a number in it that indicates the total number of mines in the neighboring cells.
 * Starting off with some arrangement of mines we want to create a Minesweeper game setup.
 * 
 * Example:
 * For -
 * matrix = [[true, false, false],
 *           [false, true, false],
 *           [false, false, false]]
 * 
 * the output should be
 * solution(matrix) = [[1, 2, 1],
 *                     [2, 1, 1],
 *                     [1, 1, 1]]
 * 
 * [execution time limit] 3 seconds (java)
 * [input] array.array.boolean matrix
 * 
 * [output] array.array.integer
 * Rectangular matrix of the same size as matrix each cell of which contains an integer equal to
 * the number of mines in the neighboring cells. Two cells are called neighboring if they share
 * at least one corner.
 * 
 * Tests passed: 11/11.
 */
int[][] solution(boolean[][] matrix) {
    int yLimit = matrix.length-1;
    int xLimit = matrix[0].length-1;
    List<Integer> sums = new ArrayList<Integer>();
    
    for (int y = 0; y < matrix.length; y++) {
        for (int x = 0; x < matrix[0].length; x++) {
            int on = 0;
            int off = 0;
            ArrayList<Integer> sum = new ArrayList<Integer>();
            // gets indexes surrounding an index.
            for (int i = Math.max(0, y-1); i <= Math.min(y+1, yLimit); i++) {
                for (int j = Math.max(0, x-1); j <= Math.min(x+1, xLimit); j++) {
                    if (i != y || j != x) {
                        if (!matrix[i][j]) {
                            off = 0;
                            sum.add(off);
                        } else {
                            on += 1;
                            sum.add(on);
                        }
                    }
                }
            }
            int max = Collections.max(sum);
            sums.add(max);
        }
    }

    List<Integer> section = new ArrayList<Integer>();
    int[][] result = new int[matrix.length][matrix[0].length];
    
    for (int i = 0; i < result.length; i++) {
        for (int j = 0; j < sums.size(); j++) {
            if (j <= xLimit-1) {
                section = sums.subList(j, xLimit+1);
                if (section.size() == matrix[0].length) {
                    result[i] = section.stream().mapToInt(x->x).toArray();
                    section.clear();
                }
            }
        }
    }
    return result;
}
