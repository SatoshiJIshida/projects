/**
 * Given a string, your task is to replace each of its characters by the next one in the
 * English alphabet; i.e. replace a with b, replace b with c, etc (z would be replaced by a).
 * 
 * Example:
 * For inputString = "crazy", the output should be solution(inputString) = "dsbaz".
 * 
 * [execution time limit] 4 seconds (js)
 * [input] string inputString
 * 
 * [output] string
 * The resulting string after replacing each of its characters.
 * 
 * Tests passed: 10/10.
 */
function solution(inputString) {
    const split = inputString.split('');
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    for (let i = 0; i < split.length; i++) {
        let char = '';
        if (split[i] === alphabet[alphabet.length-1]) {
            char = alphabet[0];
            split[i] = alphabet[char];
        }
        char = alphabet.indexOf(split[i]);
        split[i] = alphabet[char+1];
    }
    return split.join('');
}