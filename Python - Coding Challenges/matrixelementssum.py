"""
After becoming famous, the CodeBots decided to move into a new building together.
Each of the rooms has a different cost, and some of them are free, but there's a
rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious,
they refuse to stay in any of the free rooms, or any of the rooms below any of the free rooms.

Given matrix, a rectangular matrix of integers, where each value represents the cost of
the room, your task is to return the total sum of all rooms that are suitable for the
CodeBots (ie: add up all the values that don't appear below a 0).

Example:
For

matrix = [[0, 1, 1, 2], 
          [0, 5, 0, 0], 
          [2, 0, 3, 3]]
the output should be
solution(matrix) = 9.

[execution time limit] 4 seconds (py3)
[input] array.array.integer matrix

[output] integer
The total price of all the rooms that are suitable for the CodeBots to live in.

Tests passed: 20/20.
"""
def solution(matrix):
    result = 0;
    
    for row, y  in enumerate(matrix):
        for col, x in enumerate(matrix[row]):
            if ((matrix[row][col] == 0) and (row+1 < len(matrix))):
                matrix[row+1][col] = 0;
                 
            result += matrix[row][col]
     
    return result
