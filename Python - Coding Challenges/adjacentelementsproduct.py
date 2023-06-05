"""
Given an array of integers, find the pair of adjacent elements
that has the largest product and return that product.

Example:
For inputArray = [3, 6, -2, -5, 7, 3], the output should be
solution(inputArray) = 21.

7 and 3 produce the largest product.

[execution time limit] 4 seconds (py3)
[input] array.integer inputArray

[output] integer
The largest product of adjacent elements.

Tests passed: 18/18.
"""
def solution(inputArray):
    product = 0
    largest = 0
    output = []
    
    for i, el in enumerate(inputArray):
        if (i+1 < len(inputArray)):
            product = inputArray[i]*inputArray[i+1]
            output.append(product)
    
    largest = max(output)
    return largest
