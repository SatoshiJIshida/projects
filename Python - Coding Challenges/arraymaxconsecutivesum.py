"""
Given array of integers, find the maximal possible sum of some of its k consecutive elements.

Example:
For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be
solution(inputArray, k) = 8.
All possible sums of 2 consecutive elements are:

2 + 3 = 5;
3 + 5 = 8;
5 + 1 = 6;
1 + 6 = 7.
Thus, the answer is 8.

There are 3 different characters a, b and c.

[execution time limit] 4 seconds (py3)
[input] array.integer inputArray
[input] integer k

[output] integer
The maximal possible sum.

Tests passed: 20/20.
"""
def solution(inputArray, k):
    group = inputArray[0:k]
    calc = functools.reduce(lambda a, b: a+b, group)
    result = calc
    
    for i, el in enumerate(inputArray):
        if i < len(inputArray)-k:
            calc += inputArray[i+k] - inputArray[i]
            result = max(result, calc)

    return result
