"""
Some people are standing in a row in a park. There are trees between them
which cannot be moved. Your task is to rearrange the people by their heights
in a non-descending order without moving the trees. People can be very tall!

Example:
For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
solution(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

[execution time limit] 4 seconds (py3)
[input] array.integer a

[output] array.integer
Sorted array a with all the trees untouched.

Tests passed: 12/12.
"""
def solution(a):
    result = sorted([i for i in a if i > 0]) # sorted except -1s.
    for i, el in enumerate(a):
        if el == -1:
            result.insert(i,el) # insert -1s in original indexes.
    return result
