"""
Two arrays are called similar if one can be obtained from another by swapping
at most one pair of elements in one of the arrays.

Given two arrays a and b, check whether they are similar.

Example:
For a = [1, 2, 3] and b = [1, 2, 3], the output should be
solution(a, b) = true.

The arrays are equal, no need to swap any elements.

[execution time limit] 4 seconds (py3)
[input] array.integer a
[input] array.integer b

[output] boolean
true if a and b are similar, false otherwise.

Tests passed: 20/20.
"""
def solution(a, b):
    counts = count(a, b)
    if ((len(counts) > 2) or (len(counts) == 1)):
        return False
    if len(counts) == 0:
        return True
    
    if len(counts) == 2:
        if ((a[counts[0]] == b[counts[1]]) and (a[counts[1]] == b[counts[0]])):
            return True
    
    return False


def count(a, b):
    indexes = []
    for i in range(len(a)):
        if a[i] != b[i]:
            indexes.append(i)
            
    return indexes            
