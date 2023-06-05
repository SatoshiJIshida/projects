"""
Elections are in progress!

Given an array of the numbers of votes given to each of the candidates so far,
and an integer k equal to the number of voters who haven't cast their vote yet,
find the number of candidates who still have a chance to win the election.

The winner of the election must secure strictly more votes than any other candidate.
If two or more candidates receive the same (maximum) number of votes, assume there is
no winner at all.

Example:
For votes = [2, 3, 5, 2] and k = 3, the output should be
solution(votes, k) = 2.

[execution time limit] 4 seconds (py3)
[input] array.integer votes
[input] integer k

[output] integer

Tests passed: 12/12.
"""
def solution(votes, k):
    maximum = max(votes)
    votes.sort()
    posOfMax = max(i for i, el in enumerate(votes) if el == maximum)
    occurs = posOfMax - votes.index(maximum)+1
    count = 0

    for i in range(len(votes)):
        votes[i] += k
        if votes[i] > maximum:
            count += 1
        if k == 0 and occurs == 1:
            return 1
        if k == 0 and occurs > 1:
            return 0

    return count
