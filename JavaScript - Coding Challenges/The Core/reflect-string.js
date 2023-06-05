/**
 * Define an alphabet reflection as follows: a turns into z, b turns into y,
 * c turns into x, ..., n turns into m, m turns into n, ..., z turns into a.
 * 
 * Define a string reflection as the result of applying the alphabet reflection
 * to each of its characters.
 * 
 * Reflect the given string.
 * 
 * Example:
 * For inputString = "name", the output should be
 * solution(inputString) = "mznv".
 * 
 * [execution time limit] 4 seconds (js)
 * [input] string inputString
 * 
 * [output] string
 * 
 * Tests passed: 10/10.
 */
function solution(inputString) {
    const z = 'z'.charCodeAt(),
          a = 'a'.charCodeAt(),
          alphabet = [],
          reverseAlphabet = [];
          
    for (let i = a; i <= z; i++) {
        alphabet.push(String.fromCharCode(i));
    }
    for (let i = z; i >= a; i--) {
        reverseAlphabet.push(String.fromCharCode(i));
    }
    
    inputString = inputString.split('');
    const result = [];
    let index = 0, reverseIndex = 0;
    for (let i = 0; i < inputString.length; i++) {
        if (alphabet.includes(inputString[i])) {
            index = alphabet.indexOf(inputString[i]);
            reverseIndex = reverseAlphabet[index];
            result.push(reverseIndex);
        }
    }   
    return result.join('');
}