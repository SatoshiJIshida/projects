"""
Given a string, find the shortest possible string which can be achieved by adding characters
to the end of initial string to make it a palindrome.

Example:
For st = "abcdc", the output should be
solution(st) = "abcdcba".

[execution time limit] 4 seconds (py3)
[input] string st

[output] string

Tests passed: 22/22.
"""
def solution(st):
    result = ''
    reverse = [*st]
    reverse.reverse()
    reverse = ''.join(reverse)
    
    if st == reverse:
        return st
    
    process = ''
    for i in range(len(st)):
        process += st[i]
        reverse = [*process]
        reverse.reverse()
        reverse = ''.join(reverse)
        
        check = st+reverse
        
        reverse = [*check]
        reverse.reverse()
        reverse = ''.join(reverse)

        if check == reverse:
            result = check
            break

    return result
