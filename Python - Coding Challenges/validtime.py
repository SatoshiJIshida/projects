"""
Check if the given string is a correct time representation of the 24-hour clock.

Example:
For time = "13:58", the output should be
solution(time) = true;

[execution time limit] 4 seconds (py3)
[input] string time

[output] boolean
true if the given representation is correct, false otherwise.

Tests passed: 22/22.
"""
def solution(time):
    one = int(time[0:1])
    two = int(time[1:2])
    three = int(time[3:4])
    four = int(time[4])
    
    if (one == 2) and (two >= 0 and two <= 3) or (one >= 0 and one <= 1):
        if (two >= 0 and two <= 9) and (three >= 0 and three <= 5):
            if (four >= 0 and four <= 9):
                return True
                
    return False
