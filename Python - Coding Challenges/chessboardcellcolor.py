"""
Given two cells on the standard chess board, determine whether they have the same color or not.

Example:
For cell1 = "A1" and cell2 = "C3", the output should be
solution(cell1, cell2) = true.

[execution time limit] 4 seconds (py3)
[input] string cell1
[input] string cell2

[output] boolean
true if both cells have the same color, false otherwise.

Tests passed: 20/20.
"""
def solution(cell1, cell2):
    split1 = [*cell1]
    split2 = [*cell2]
    alpha1 = ['A', 'C', 'E', 'G']
    dark = []
    light = []
    
    # cell 1
    if int(split1[1]) % 2 == 1:
        if split1[0] in alpha1:
            dark.append(''.join(split1))
        else:
            light.append(''.join(split1))
            
    if int(split1[1]) % 2 == 0:
        if split1[0] in alpha1:
            light.append(''.join(split1))
        else:
            dark.append(''.join(split1))
            
    # cell 2
    if int(split2[1]) % 2 == 1:
        if split2[0] in alpha1:
            dark.append(''.join(split2))
        else:
            light.append(''.join(split2))
            
    if  int(split2[1]) % 2 == 0:
        if split2[0] in alpha1:
            light.append(''.join(split2))
        else:
            dark.append(''.join(split2))

    result = False
    if len(dark) == 2:
        result = True
    elif len(light) == 2:
        result = True
        
    return result
