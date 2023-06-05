"""
Determine if the given character is a digit or not.

Example:
For symbol = '0', the output should be
solution(symbol) = true;
For symbol = '-', the output should be
solution(symbol) = false.

[execution time limit] 4 seconds (py3)
[input] char symbol

[output] boolean
true if symbol is a digit, false otherwise.

Tests passed: 21/21.
"""
def solution(symbol):
    digits = '\d'
    result = False
    
    if re.search(digits, symbol):
        result = True

    return result
