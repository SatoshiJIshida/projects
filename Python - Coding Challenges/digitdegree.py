"""
Let's define digit degree of some positive integer as the number of times we need to
replace this number with the sum of its digits until we get to a one digit number.

Given an integer, find its digit degree.

Example:
For n = 5, the output should be
solution(n) = 0;

For n = 91, the output should be
solution(n) = 2.
9 + 1 = 10 -> 1 + 0 = 1.

[execution time limit] 4 seconds (py3)
[input] integer n

[output] integer

Tests passed: 20/20.
"""
def solution(n):
    count = 0
    return calc(n, count)

def calc(n, count):
    digits = [int(x) for x in str(n)]
    collectDigits = []
    result = 0

    if len(digits) == 1:
        return 0
    
    for el in digits:
        collectDigits.append(el)
    
    result = functools.reduce(lambda a, b: a+b, collectDigits)
    count += 1
    collectDigits = []

    return count if len(str(result)) == 1 else calc(result, count)
