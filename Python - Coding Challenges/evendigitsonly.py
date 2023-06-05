"""
Check if all digits of the given integer are even.

Example:
For n = 248622, the output should be
solution(n) = true;

[execution time limit] 4 seconds (py3)
[input] integer n

[output] boolean
true if all digits of n are even, false otherwise.

Tests passed: 20/20.
"""
def solution(n):
    digits = [int(x) for x in str(n)]
    
    for i in range(len(digits)):
        if digits[i] % 2 != 0:
            return False
    
    return True
