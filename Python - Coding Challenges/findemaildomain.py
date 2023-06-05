"""
An email address such as "John.Smith@example.com" is made up of a local part ("John.Smith"),
an "@" symbol, then a domain part ("example.com").

The domain name part of an email address may only consist of letters, digits, hyphens and dots.
The local part, however, also allows a lot of different special characters. Here you can look at
several examples of correct and incorrect email addresses.

Given a valid email address, find its domain part.

Example:
For address = "prettyandsimple@example.com", the output should be
solution(address) = "example.com";

[execution time limit] 4 seconds (py3)
[input] string address

[output] string

Tests passed: 20/20.
"""
def solution(address):
    result = ''
    
    for i, el in enumerate(address):
        if el == '@':
            result = address[slice(i+1, len(address))]

    return result
