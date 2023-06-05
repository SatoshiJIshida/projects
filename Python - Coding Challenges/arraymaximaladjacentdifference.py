"""
Given an array of integers, find the maximal absolute difference between any two of
its adjacent elements.

Example:
For inputArray = [2, 4, 1, 0], the output should be
solution(inputArray) = 3.

[execution time limit] 4 seconds (py3)
[input] array.integer inputArray

[output] integer
The maximal absolute difference.

Tests passed: 13/13.
"""
def solution(inputArray):
    result = 0
    resultArray = []
    
    for i, el in enumerate(inputArray):
        a = i
        x = i+1
        b = i+2

        if b < len(inputArray):
            diff1 = abs(inputArray[x] - inputArray[a])
            diff2 = abs(inputArray[x] - inputArray[b])
            maxEachIteration = max(diff1, diff2)
            resultArray.append(maxEachIteration)
            result = max(resultArray)
              
    return result
