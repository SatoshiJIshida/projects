"""
Ticket numbers usually consist of an even number of digits.
A ticket number is considered lucky if the sum of the first half
of the digits is equal to the sum of the second half.

Given a ticket number n, determine if it's lucky or not.

Example:
For n = 1230, the output should be
solution(n) = true;

[execution time limit] 4 seconds (py3)
[input] integer n

[output] boolean
true if n is a lucky ticket number, false otherwise.

Tests passed: 20/20.
"""
def solution(n):
    n = str(n)
    half = math.ceil(len(n)/2)
    first = n[0:half]
    second = n[half:len(n)];
    firstNums = [int(numeric_string) for numeric_string in first]
    secondNums = [int(numeric_string) for numeric_string in second]

    sum1 = functools.reduce(lambda a, b: a+b, firstNums)
    sum2 = functools.reduce(lambda a, b: a+b, secondNums)

    if sum1 == sum2:
        return True

    return False
