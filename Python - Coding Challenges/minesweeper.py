"""
In the popular Minesweeper game you have a board with some mines and those cells
that don't contain a mine have a number in it that indicates the total number of
mines in the neighbouring cells. Starting off with some arrangement of mines we
want to create a Minesweeper game setup.

Example:
matrix = [[true, false, false],
          [false, true, false],
          [false, false, false]]
the output should be

solution(matrix) = [[1, 2, 1],
                    [2, 1, 1],
                    [1, 1, 1]]

[execution time limit] 4 seconds (py3)
[input] array.array.boolean matrix

[output] array.array.integer
Rectangular matrix of the same size as matrix each cell of which contains an integer
equal to the number of mines in the neighbouring cells. Two cells are called neighbouring
if they share at least one corner.

Tests passed: 11/11.
"""
def solution(matrix):
    yLimit = len(matrix)
    xLimit = len(matrix[0])
    result = [[0]*xLimit for __ in range(yLimit)]

    for y in range(yLimit):
        for x in range(xLimit):
            if matrix[y][x]:
                for i in range(max(0, y-1), min(y+2, yLimit)):
                    for j in range(max(0, x-1), min(x+2, xLimit)):
                        if i != y or j != x:
                            result[i][j] += 1
    return result
