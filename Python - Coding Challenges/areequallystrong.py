"""
Call two arms equally strong if the heaviest weights they each are able to lift are equal.

Call two people equally strong if their strongest arms are equally strong (the strongest arm
can be both the right and the left), and so are their weakest arms.

Given your and your friend's arms' lifting capabilities find out if you two are equally strong.

Example:
For yourLeft = 10, yourRight = 15, friendsLeft = 15, and friendsRight = 10, the output should be
solution(yourLeft, yourRight, friendsLeft, friendsRight) = true;

[execution time limit] 4 seconds (py3)
[input] integer yourLeft
[input] integer yourRight
[input] integer friendsLeft
[input] integer friendsRight

[output] boolean
true if you and your friend are equally strong, false otherwise.

Tests passed: 27/27.
"""
def solution(yourLeft, yourRight, friendsLeft, friendsRight):
    result = False
    
    if ((yourLeft == friendsLeft) or (yourLeft == friendsRight)) and ((yourRight == friendsLeft) or (yourRight == friendsRight)):
        result = True
    
    return result
