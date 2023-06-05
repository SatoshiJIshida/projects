"""
Several people are standing in a row and need to be divided into two teams.
The first person goes into team 1, the second goes into team 2, the third
goes into team 1 again, the fourth into team 2, and so on.

You are given an array of positive integers - the weights of the people.
Return an array of two integers, where the first element is the total weight
of team 1, and the second element is the total weight of team 2 after the
division is complete.

Example:
For a = [50, 60, 60, 45, 70], the output should be
solution(a) = [180, 105].

[execution time limit] 4 seconds (py3)
[input] array.integer a

[output] array.integer

Tests passed: 10/10.
"""
def solution(a):
    team1 = []
    team2 = []
    result = []
    
    for i, el in enumerate(a):
        if len(a) == 1:
            a.append(0)
            return a
        if i % 2 == 0:
            team1.append(el)
        if i % 2 == 1:
            team2.append(el)

    sum1 = functools.reduce(lambda a, b: a+b, team1)
    sum2 = functools.reduce(lambda a, b: a+b, team2)
    result.append(sum1)
    result.append(sum2)
    return result
