"""
Given a position of a knight on the standard chessboard, find the number of different moves
the knight can perform.

The knight can move to a square that is two squares horizontally and one square vertically,
or two squares vertically and one square horizontally away from it. The complete move therefore
looks like the letter L.

Example:
For cell = "a1", the output should be
solution(cell) = 2.

[execution time limit] 4 seconds (py3)
[input] string cell

[output] integer

Tests passed: 20/20.
"""
def solution(cell):
    letters = ['a','b','c','d','e','f','g','h']
    numbers = [1,2,3,4,5,6,7,8]
    count = 0
    
    # vertical up right.
    if 0 <= letters.index(cell[0])+1 and letters.index(cell[0])+1 <= len(letters)-1:
        if int(cell[1])+2 in numbers:
            count += 1

    # vertical up left.
    if 0 <= letters.index(cell[0])-1 and letters.index(cell[0])-1 <= len(letters)-1:
        if int(cell[1])+2 in numbers:
            count += 1
    
    # vertical down right.
    if 0 <= letters.index(cell[0])+1 and letters.index(cell[0])+1 <= len(letters)-1:
        if int(cell[1])-2 in numbers:
            count += 1
    
    # vertical down left.
    if 0 <= letters.index(cell[0])-1 and letters.index(cell[0])-1 <= len(letters)-1:
        if int(cell[1])-2 in numbers:
            count += 1
            
    # horizontal right up.
    if 0 <= letters.index(cell[0])+2 and letters.index(cell[0])+2 <= len(letters)-1:
        if int(cell[1])+1 in numbers:
            count += 1
    
    # horizontal right down.
    if 0 <= letters.index(cell[0])+2 and letters.index(cell[0])+2 <= len(letters)-1:
        if int(cell[1])-1 in numbers:
            count += 1
            
    # horizontal left up.
    if 0 <= letters.index(cell[0])-2 and letters.index(cell[0])-2 <= len(letters)-1:
        if int(cell[1])+1 in numbers:
            count += 1
            
    # horizontal left down.
    if 0 <= letters.index(cell[0])-2 and letters.index(cell[0])-2 <= len(letters)-1:
        if int(cell[1])-1 in numbers:
            count += 1
    
    return count
