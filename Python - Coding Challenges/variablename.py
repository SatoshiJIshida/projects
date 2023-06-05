"""
Correct variable names consist only of English letters, digits and underscores
and they can't start with a digit.

Check if the given string is a correct variable name.

Example:
For name = "var_1__Int", the output should be
solution(name) = true;

[execution time limit] 4 seconds (py3)
[input] string name

[output] boolean
true if name is a correct variable name, false otherwise.

Tests passed: 20/20.
"""
def solution(name):
    if re.search("^\d", name):
        return False
    elif re.search("^\w+$", name):
        return True
    else:
        return False
