"""
Given the positions of a white bishop and a black pawn on the standard chess board,
determine whether the bishop can capture the pawn in one move.

The bishop has no restrictions in distance for each move, but is limited to diagonal movement.
Check out the example below to see how it can move:

Example:
For bishop = "a1" and pawn = "c3", the output should be
solution(bishop, pawn) = true.

[execution time limit] 4 seconds (py3)
[input] string bishop
[input] string pawn

[output] boolean
true if the bishop can capture the pawn, false otherwise.

Tests passed: 20/20.
"""
def solution(bishop, pawn):
    letters = ["a","b","c","d","e","f","g","h"]
    oddL = []
    evenL = []
    
    for i in range(len(letters)):
        if i % 2 == 0:
            oddL.append(letters[i])
        if i % 2 == 1:
            evenL.append(letters[i])

    # dark
    if bishop[0] in oddL and int(bishop[1]) % 2 == 1 or bishop[0] in evenL and int(bishop[1]) % 2 == 0:
        if pawn[0] in oddL and int(pawn[1]) % 2 == 1 or pawn[0] in evenL and int(pawn[1]) % 2 == 0:
            if bishop[0] != pawn[0]:
                return True
    # light
    if bishop[0] in oddL and int(bishop[1]) % 2 == 0 or bishop[0] in evenL and int(bishop[1]) % 2 == 1:
        if pawn[0] in oddL and int(pawn[1]) % 2 == 0 or pawn[0] in evenL and int(pawn[1]) % 2 == 1:
            if bishop[0] != pawn[0]:
                return True
    
    return False
