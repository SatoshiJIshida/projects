"""
You are given an array of integers. On each move you are allowed to
increase exactly one of its element by one. Find the minimal number of
moves required to obtain a strictly increasing sequence from the input.

Example:
For inputArray = [1, 1, 1], the output should be
solution(inputArray) = 3.

[execution time limit] 4 seconds (py3)
[input] array.integer inputArray

[output] integer
The minimal number of moves needed to obtain a strictly increasing sequence from inputArray.
It's guaranteed that for the given test cases the answer always fits signed 32-bit integer type.

Tests passed: 20/20.
"""
def solution(inputArray):
    count = 0
    
    for i, el in enumerate(inputArray):
        if i < len(inputArray)-1:
            prev = inputArray[i]
            cur = inputArray[i+1]
            
            if prev >= cur:
                temp = prev-cur+1
                inputArray[i+1] += temp
                count += temp

    return count
