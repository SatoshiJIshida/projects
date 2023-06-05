"""
Below we will define an n-interesting polygon. Your task is to find the
area of a polygon for a given n.

A 1-interesting polygon is just a square with a side of length 1.
An n-interesting polygon is obtained by taking the n - 1-interesting
polygon and appending 1-interesting polygons to its rim, side by side.

Example:
For n = 2, the output should be
solution(n) = 5;
For n = 3, the output should be
solution(n) = 13.

[execution time limit] 4 seconds (py3)
[input] integer n

[output] integer
The area of the n-interesting polygon.

Tests passed: 20/20.
"""
def solution(n):
    while (n == 1):
        return n
    
    while (n == 2):
        n = (n-1) + ((n-1)*4)
        return n
        
    while (n >= 3):
        n = solution(n-1) + ((n-1)*4)
        return n
