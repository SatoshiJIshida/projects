"""
CodeMaster has just returned from shopping. He scanned the check of the items he bought and
gave the resulting string to Ratiorg to figure out the total number of purchased items.
Since Ratiorg is a bot he is definitely going to automate it, so he needs a program that
sums up all the numbers which appear in the given input.

Help Ratiorg by writing a function that returns the sum of numbers that appear in the given
inputString.

Example:
For inputString = "2 apples, 12 oranges", the output should be
solution(inputString) = 14.

[execution time limit] 4 seconds (py3)
[input] string inputString

[output] integer

Tests passed: 15/15.
"""
def solution(inputString):
    inputString = inputString+' '
    nums = ['0','1','2','3','4','5','6','7','8','9']
    minus = '-'
    extractNums = []
    processNum = ''
    result = 0
    inputString = [*inputString]
    
    for i in range(len(inputString)-1):
        if inputString[i] in nums:
            if inputString[i-1] == minus:
                processNum = minus
            processNum += inputString[i]

            if not inputString[i+1] in nums:
                extractNums.append(int(processNum))
                processNum = ''

    if len(extractNums) > 0:
        result = functools.reduce(lambda a, b: a+b, extractNums)
        return result
    
    return 0
