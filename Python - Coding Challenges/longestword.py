"""
Define a word as a sequence of consecutive English letters. Find the longest word from the given string.

Example:
For text = "Ready, steady, go!", the output should be
solution(text) = "steady".

[execution time limit] 4 seconds (py3)
[input] string text

[output] string
The longest word from text. It's guaranteed that there is a unique output.

Tests passed: 10/10.
"""
def solution(text):
    letters = '^[a-zA-Z\s]*$'
    x = re.search(letters, text)
    longest = ''
    
    if x:
        words = text.split()
        longest = max(words, key=len)
        return longest
    else:
        remove = '[!_(+*)\s[\],-]'
        words = re.split(remove, text)
        longest = max(words, key=len)
        return longest
