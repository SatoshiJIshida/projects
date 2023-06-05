"""
Given a string, output its longest prefix which contains only digits.

Example:
For inputString = "123aa1", the output should be
solution(inputString) = "123".

[execution time limit] 4 seconds (py3)
[input] string inputString

[output] string

Tests passed: 12/12.
"""
def solution(inputString):
    nums = ["0","1","2","3","4","5","6","7","8","9"]
    inputString = [*inputString]
    result = ""

    for el in inputString:
        for num in nums:
            if el == num:
                result += num
        if not el in nums: # needs to be outside of the nums loop.
            break
    return result
