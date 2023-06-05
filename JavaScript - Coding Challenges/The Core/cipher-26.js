/**
 * You've intercepted an encrypted message, and you are really curious about its contents.
 * You were able to find out that the message initially contained only lowercase English
 * letters, and was encrypted with the following cipher:
 * 
 * Let all letters from 'a' to 'z' correspond to the numbers from 0 to 25, respectively.
 * The number corresponding to the ith letter of the encrypted message is then equal to 
 * the sum of numbers corresponding to the first i letters of the initial unencrypted 
 * message modulo 26.
 * Now that you know how the message was encrypted, implement the algorithm to decipher it.
 * 
 * Example:
 * For message = "taiaiaertkixquxjnfxxdh", the output should be
 * solution(message) = "thisisencryptedmessage".
 * 
 * The initial message "thisisencryptedmessage" was encrypted as follows:
 * 
 * letter 0: t -> 19 -> t;
 * letter 1: th -> (19 + 7) % 26 -> 0 -> a;
 * letter 2: thi -> (19 + 7 + 8) % 26 -> 8 -> i;
 * etc.
 * 
 * [execution time limit] 4 seconds (js)
 * [input] string message
 * 
 * [output] string
 * 
 * Tests passed: 12/12.
 */
function solution(message) {
    const a = 'a'.charCodeAt(),
          z = 'z'.charCodeAt(),
          alphabet = [],
          key = 26;

    for (let i = a; i <= z; i++) {
        alphabet.push(String.fromCharCode(i));
    }
    
    message = message.split('');

    let current = 0,
        prev = 0,
        difference = 0,
        deciphered = '';
    for (let i = 0; i < message.length; i++) {
        current = alphabet.indexOf(message[i]);
        if (current > prev) {
            difference = current - prev;
        } else {
            difference = (key - prev + current) % 26;
        }
        deciphered += alphabet[difference];
        prev = current;
    }
    return deciphered;
}