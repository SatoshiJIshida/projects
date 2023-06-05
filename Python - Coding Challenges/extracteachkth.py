"""
Given array of integers, remove each kth element from it.

Example:
For inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and k = 3, the output should be
solution(inputArray, k) = [1, 2, 4, 5, 7, 8, 10].

[execution time limit] 4 seconds (py3)
[input] array.integer inputArray
[input] integer k

[output] array.integer
inputArray without elements k - 1, 2k - 1, 3k - 1 etc.

Tests passed: 10/10.
"""
def solution(inputArray, k):
    remove = k-1
    if remove == 0:
        return []
    
    for i, el in enumerate(inputArray):
        j = i+1
        if j % remove == 0:
            inputArray = inputArray[:j] + inputArray[j+1:]
        else:
            continue
    
    return inputArray
