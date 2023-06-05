"""
Given a string, return its encoding defined as follows:

First, the string is divided into the least possible number of disjoint substrings
consisting of identical characters
for example, "aabbbc" is divided into ["aa", "bbb", "c"]
Next, each substring with length greater than one is replaced with a concatenation
of its length and the repeating character
for example, substring "bbb" is replaced by "3b"
Finally, all the new strings are concatenated together in the same order and a new 
string is returned.

Example:
For s = "aabbbc", the output should be
solution(s) = "2a3bc".

[execution time limit] 4 seconds (py3)
[input] string s

[output] string
Encoded version of s.

Tests passed: 19/19.
"""
def solution(s):
    s = s+' '
    counter = 1
    result = ''
    
    for i in range(len(s)):
        if s[i-1] == s[i]: # if match, increments again.
            counter += 1
        else:
            if counter > 1:
                result += str(counter)
                counter = 1
                
            result += s[i-1]

    result = result[1:]
    return result
