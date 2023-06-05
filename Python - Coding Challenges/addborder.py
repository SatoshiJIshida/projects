"""
Given a rectangular matrix of characters, add a border of asterisks(*) to it.

Example:
For

picture = ["abc",
           "ded"]
the output should be

solution(picture) = ["*****",
                      "*abc*",
                      "*ded*",
                      "*****"]

[execution time limit] 4 seconds (py3)
[input] array.string picture

[output] array.string
The same matrix of characters, framed with a border of asterisks of width 1.

Tests passed: 10/10.
"""
def solution(picture):
    result = []
    asterisk = '*'
    asterisks = ''
    
    for i in range(len(picture)):
        asterisks = (len(picture[i])+2)*asterisk
        picture[i] = asterisk+picture[i]
        picture[i] = picture[i]+asterisk
    
    result.append(asterisks)
    
    for i, el in enumerate(picture):
        result.append(el)
        
    result.append(asterisks)

    return result
