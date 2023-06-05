"""
Given an array of strings, return another array containing all of its longest strings.

Example:
For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
solution(inputArray) = ["aba", "vcd", "aba"].

[execution time limit] 4 seconds (py3)
[input] array.string inputArray

[output] array.string
Array of the longest strings, stored in the same order as in the inputArray.

Tests passed: 20/20.
"""
def solution(inputArray):
    result = []
    
    if (len(inputArray) == 1):
        return inputArray
        
    longest = sorted(inputArray, key=len)
    longestLen = len(longest[len(longest)-1])

    for i, el in enumerate(longest):
        if (len(longest[i]) == longestLen):
            result.append(longest[i])

    return result
