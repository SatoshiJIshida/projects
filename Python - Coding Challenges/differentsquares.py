"""
Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it.

Example:
For

matrix = [[1, 2, 1],
          [2, 2, 2],
          [2, 2, 2],
          [1, 2, 3],
          [2, 2, 1]]
the output should be
solution(matrix) = 6.

[execution time limit] 4 seconds (py3)
[input] array.array.integer matrix

[output] integer
The number of different 2 × 2 squares in matrix.

Tests passed: 13/13.
"""
def solution(matrix):
    square = ''
    squares = []
    count = 0
    
    for i in range(len(matrix)):
        for j in range(len(matrix[i])):
            if i < len(matrix)-1 and j < len(matrix[i])-1:
                square += str(matrix[i][j])+str(matrix[i][j+1])+str(matrix[i+1][j])+str(matrix[i+1][j+1])
                squares.append(square)
                square = ''
    
    result = set(squares)
    return len(result)
