"""
Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.

Example:
For n = 152, the output should be
solution(n) = 52;
For n = 1001, the output should be
solution(n) = 101.

[execution time limit] 4 seconds (py3)
[input] integer n

[output] integer

Tests passed: 20/20.
"""
def solution(n):
    nStr = str(n)
    nStr = [*nStr]
    findMax = []

    for i in range(len(nStr)):
        minusOne = nStr[:i] + nStr[i+1:]
        minusOne = ''.join(minusOne)
        findMax.append(int(minusOne))
        
    result = max(findMax)
    return result
