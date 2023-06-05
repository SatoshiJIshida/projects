"""
Given two strings, find the number of common characters between them.

Example:
For s1 = "aabcc" and s2 = "adcaa", the output should be
solution(s1, s2) = 3.

Strings have 3 common characters - 2 "a"s and 1 "c".

[execution time limit] 4 seconds (py3)
[input] string s1
[input] string s2

[output] integer

Tests passed: 10/10.
"""
def solution(s1, s2):
    s2 = [*s2]
    count = 0

    for el in s1:
        if el in s2:
            count += 1
            s2.remove(el)

    return count
