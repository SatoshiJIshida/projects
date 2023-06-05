"""
You are taking part in an Escape Room challenge designed specifically for programmers.
In your efforts to find a clue, you've found a binary code written on the wall behind a vase,
and realized that it must be an encrypted message. After some thought, your first guess is that
each consecutive 8 bits of the code stand for the character with the corresponding extended ASCII code.

Assuming that your hunch is correct, decode the message.

Example:
For code = "010010000110010101101100011011000110111100100001", the output should be
solution(code) = "Hello!".

The first 8 characters of the code are 01001000, which is 72 in the binary numeral system.
72 stands for H in the ASCII-table, so the first letter is H.
Other letters can be obtained in the same manner.

[execution time limit] 4 seconds (py3)
[input] string code

[output] string
The decrypted message.

Tests passed: 20/20.
"""
def solution(code):
    start = 0
    extract = []
    answer = ''
    count = 8

    for i in range(len(code)+1):
        if i == count:
            section = code[start:count]
            extract.append(section)
            conversion = chr(int(extract[0], 2))
            answer += conversion
            start = count
            extract = []
            count += 8

    return answer
 