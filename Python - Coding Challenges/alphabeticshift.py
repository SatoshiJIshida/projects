"""
Given a string, your task is to replace each of its characters by the next one in the
English alphabet; i.e. replace a with b, replace b with c, etc (z would be replaced by a).

Example:
For inputString = "crazy", the output should be solution(inputString) = "dsbaz".

[execution time limit] 4 seconds (py3)
[input] string inputString

[output] string
The resulting string after replacing each of its characters.

Tests passed: 10/10.
"""
def solution(inputString):
    split = [*inputString]
    alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    
    for i, el in enumerate(split):
        char = ''
        if split[i] == alphabet[len(alphabet)-1]:
            split[i] = alphabet[0]
        else:
            char = alphabet.index(split[i])
            split[i] = alphabet[char+1]
            
    return ''.join(split)
