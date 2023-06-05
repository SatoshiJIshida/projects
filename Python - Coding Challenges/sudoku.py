"""
Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with digits so that each column,
each row, and each of the nine 3 × 3 sub-grids that compose the grid contains all of the digits from 1 to 9.

This algorithm should check if the given grid of numbers represents a correct solution to Sudoku.

Example:
For
grid = [[1, 3, 2, 5, 4, 6, 9, 8, 7],
        [4, 6, 5, 8, 7, 9, 3, 2, 1],
        [7, 9, 8, 2, 1, 3, 6, 5, 4],
        [9, 2, 1, 4, 3, 5, 8, 7, 6],
        [3, 5, 4, 7, 6, 8, 2, 1, 9],
        [6, 8, 7, 1, 9, 2, 5, 4, 3],
        [5, 7, 6, 9, 8, 1, 4, 3, 2],
        [2, 4, 3, 6, 5, 7, 1, 9, 8],
        [8, 1, 9, 3, 2, 4, 7, 6, 5]]
the output should be
solution(grid) = true;

[execution time limit] 4 seconds (py3)
[input] array.array.integer grid

[output] boolean
true if the given grid represents a correct solution to Sudoku, false otherwise.

Tests passed: 21/21.
"""
def solution(grid):
    nums = {1,2,3,4,5,6,7,8,9}
    column = []
    
    for i in range(len(grid)):
        column.append(grid[i][0])
        checkRows = set(grid[i])
        checkColumns = set(column)
        if checkRows != nums:
            return False
            
    if checkColumns != nums:
        return False
    
    squares = []
    for row in range(len(grid)):
        for col in range(len(grid[row])):
            if row < len(grid)-2 and col < len(grid[row])-2:
                squares.append(
                    [grid[row][col], grid[row][col+1], grid[row][col+2],
                    grid[row+1][col], grid[row+1][col+1], grid[row+1][col+2],
                    grid[row+2][col], grid[row+2][col+1], grid[row+2][col+2]])

    indexes = [0,3,6,21,24,27,42,45,48]
    square = {}
    count = 0
    for i in range(len(squares)):
        if i in indexes:
            squares[i].sort()
            square = set(squares[i])
            if square == nums:
                count += 1
    squares = []
    
    if count == 9:
        return True
    else:
        return False
