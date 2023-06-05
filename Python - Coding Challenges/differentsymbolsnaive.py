"""
Given a string, find the number of different characters in it.

Example:
For s = "cabca", the output should be
solution(s) = 3.

There are 3 different characters a, b and c.

[execution time limit] 4 seconds (py3)
[input] string s

[output] integer

Tests passed: 10/10.
"""
def solution(s):
    s = set(s)
    return len(s)
