/**
 * This algorithm checks if the given grid of 
 * numbers represents a correct solution to Sudoku.
 * 
 * Example:
 * grid = [[1, 3, 2, 5, 4, 6, 9, 2, 7],
 *         [4, 6, 5, 8, 7, 9, 3, 8, 1],
 *         [7, 9, 8, 2, 1, 3, 6, 5, 4],
 *         [9, 2, 1, 4, 3, 5, 8, 7, 6],
 *         [3, 5, 4, 7, 6, 8, 2, 1, 9],
 *         [6, 8, 7, 1, 9, 2, 5, 4, 3],
 *         [5, 7, 6, 9, 8, 1, 4, 3, 2],
 *         [2, 4, 3, 6, 5, 7, 1, 9, 8],
 *         [8, 1, 9, 3, 2, 4, 7, 6, 5]]
 * the output should be
 * solution(grid) = false.
 * 
 * [execution time limit] 4 seconds (js)
 * [input] array.array.integer grid
 * 
 * [output] boolean
 * true if the given grid represents a correct solution
 * to Sudoku, false otherwise.
 * 
 * Tests passed: 21/21.
 */
function solution(grid) {
    const nums = '1,2,3,4,5,6,7,8,9',
          squares = [],
          column = [];
    let   count = 0;
    
    // check column.
    for (let i = 0; i < grid.length; i++) {
        column.push(grid[i][0]);
    }
    
    const checkColumns = column.filter((prev, cur, arr) => {
        if (arr.indexOf(prev) === cur) {
            return (arr.indexOf(prev) === cur);
        }
    }).sort().join(',');
    
    // check rows.
    for (let i = 0; i < grid.length; i++) {
        const checkRows = grid[i].filter((prev, cur, arr) => {
            if (arr.indexOf(prev) === cur) {
                return arr.indexOf(prev) === cur;
            }
        }).sort().join(',');
        
        if (checkRows === nums && checkColumns === nums) {
            continue;
        } else {
            return false;
        }
    }
    
    // make squares.
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (row < grid.length-2 && col < grid[row].length-2) { 
                squares.push([grid[row][col], grid[row][col+1], grid[row][col+2],
                            grid[row+1][col], grid[row+1][col+1], grid[row+1][col+2],
                            grid[row+2][col], grid[row+2][col+1], grid[row+2][col+2]
                            ].sort());
                col += 2; // remove squares that are not part of the Sudoku board.
                if (col === grid[row].length-1) {
                    row += 2; // next 3x3 row of squares.
                }
            }
        }
    }

    // check squares.
    for (let i = 0; i < squares.length; i++) {
        if (squares[i] == nums) {
            count += 1;
        }
    }
    
    if (count === 9) {
        return true;
    } else {
        return false;
    }
}