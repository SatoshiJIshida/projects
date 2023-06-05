"""
Given a string, find out if its characters can be rearranged to form a palindrome.

Example:
For inputString = "aabb", the output should be
solution(inputString) = true.
We can rearrange "aabb" to make "abba", which is a palindrome.

[execution time limit] 4 seconds (py3)
[input] string inputString

[output] boolean
true if the characters of the inputString can be rearranged to form a palindrome,
false otherwise.

Tests passed: 20/20.
"""
def solution(inputString):
    count = [0] * 256
    
    for i, el in enumerate(inputString):
        count[ord(inputString[i])] += 1
        
    odd = 0;
    for i in range(256):
        if (count[i] & 1) == 1:
            odd += 1
        if odd > 1:
            return False
            
    return True
