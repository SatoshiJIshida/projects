"""
Given the string, check if it is a palindrome.

Example:
For inputString = "aabaa", the output should be
solution(inputString) = true;

[execution time limit] 4 seconds (py3)
[input] string inputString

[output] boolean
true if inputString is a palindrome, false otherwise.

Tests passed: 20/20.
"""
def solution(inputString):
    reverseString = inputString[::-1]

    if inputString == reverseString:
        return True
    else:
        return False
