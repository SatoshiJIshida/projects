"""
Given a sequence of integers as an array, determine whether it is possible
to obtain a strictly increasing sequence by removing no more than one element
from the array.

Note: sequence a0, a1, ..., an is considered to be a strictly increasing if
a0 < a1 < ... < an. Sequence containing only one element is also considered
to be strictly increasing.

Example:
For sequence = [1, 3, 2, 1], the output should be
solution(sequence) = false.

There is no one element in this array that can be removed in order to get a
strictly increasing sequence.

[execution time limit] 4 seconds (py3)
[input] array.integer sequence

[output] boolean
Return true if it is possible to remove one element from the array in order to
get a strictly increasing sequence, otherwise return false.

Tests passed: 38/38.
"""
def solution(sequence):
    removed = False
    last = prev = min(sequence) - 1

    for x in sequence:
        if x <= last:
            if removed:
                return False
            else:
                removed = True
                
            if x <= prev:
                continue
            elif x >= prev:
                last = prev = x
        else:
            prev, last = last, x
            
    return True
