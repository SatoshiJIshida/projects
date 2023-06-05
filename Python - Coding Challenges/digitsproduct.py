"""
Given an integer product, find the smallest positive (i.e. greater than 0) integer the product
of whose digits is equal to product. If there is no such integer, return -1 instead.

Example:
For product = 12, the output should be
solution(product) = 26;
For product = 19, the output should be
solution(product) = -1.

[execution time limit] 4 seconds (py3)
[input] integer product

[output] integer

Tests passed: 18/18.
"""
def solution(product):
    digits = []
    result = ''
    
    if product == 0:
        return 10
    if product == 1:
        return 1
    
    for i in range(9, 1, -1):
        while product % i == 0:
            product /= i
            digits.append(i)
                
            
    if product > 1:
        return -1
        
    digits.sort()
    
    for i in range(len(digits)):
        num = str(digits[i])
        result += num
        
    return int(result)
