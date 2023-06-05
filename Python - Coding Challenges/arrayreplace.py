"""
Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.

Example:
For inputArray = [1, 2, 1], elemToReplace = 1, and substitutionElem = 3, the output should be
solution(inputArray, elemToReplace, substitutionElem) = [3, 2, 3].

[execution time limit] 4 seconds (py3)
[input] array.integer inputArray
[input] integer elemToReplace
[input] integer substitutionElem

[output] array.integer

Tests passed: 16/16.
"""
def solution(inputArray, elemToReplace, substitutionElem):
    for i, el in enumerate(inputArray):
        if el == elemToReplace:
            inputArray[i] = substitutionElem

    return inputArray
