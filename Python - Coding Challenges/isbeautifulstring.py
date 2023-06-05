"""
A string is said to be beautiful if each letter in the string appears at most as many times
as the previous letter in the alphabet within the string; ie: b occurs no more times than a;
c occurs no more times than b; etc. Note that letter a has no previous letter.

Given a string, check whether it is beautiful.

Example:
For inputString = "bbbaacdafe", the output should be solution(inputString) = true.

This string contains 3 as, 3 bs, 1 c, 1 d, 1 e, and 1 f (and 0 of every other letter),
so since there aren't any letters that appear more frequently than the previous letter,
this string qualifies as beautiful.

[execution time limit] 4 seconds (py3)
[input] string inputString

[output] boolean
Return true if the string is beautiful, false otherwise.

Tests passed: 20/20.
"""
def solution(inputString):
    alphabet = []
    a = ord('a')
    z = ord('z')
    result = True

    for i in range(a, z+1):
        alphabet.append(chr(i))
    
    letters = [0] * len(alphabet)
    
    for letter in inputString:
        letters[alphabet.index(letter)] += 1

    for i in range(len(letters)-1):
        if letters[i+1] > letters[i]:
            result = False

    return result
