"""
An IP address is a numerical label assigned to each device (e.g., computer, printer)
participating in a computer network that uses the Internet Protocol for communication.
There are two versions of the Internet protocol, and thus two versions of addresses.
One of them is the IPv4 address.

Given a string, find out if it satisfies the IPv4 address naming rules.

Example:
For inputString = "172.16.254.1", the output should be
solution(inputString) = true;

[execution time limit] 4 seconds (py3)
[input] string inputString

[output] boolean
true if inputString satisfies the IPv4 address naming rules, false otherwise.

Tests passed: 41/41.
"""
def solution(inputString):
    nums = "^\d*\d$"
    beginZero = "^0"
    splitNums = inputString.split(".")
    regroup = []
    result = ""
    
    if (len(splitNums) < 4) or (len(splitNums) > 4):
        return False
        
    for i, el in enumerate(splitNums):
        if re.search(nums, el):
            if (re.search(beginZero, el)) and (len(el) > 1):
                return False
            if (int(el) >= 0) and (int(el) <= 255):
                regroup.append(el)

    if len(regroup) == len(splitNums):
        return True

    return False
