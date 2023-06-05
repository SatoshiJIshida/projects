"""
Find the leftmost digit that occurs in a given string.

Example:
For inputString = "var_1__Int", the output should be
solution(inputString) = '1';

[execution time limit] 4 seconds (py3)
[input] string inputString

[output] char

Tests passed: 11/11.
"""
def solution(inputString):
    nums = ["0","1","2","3","4","5","6","7","8","9"]
    num = ""
    result = []
    inputString = [*inputString]
    
    for i in inputString:
        for j in nums:
            if i == j:
                num = i
                result.append(i)
            
    return result[0] # get first num
