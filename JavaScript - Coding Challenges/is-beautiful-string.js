/**
 * Given a string, check whether it is beautiful.
 * 
 * Example:
 * For inputString = "bbbaacdafe", the output should be solution(inputString) = true.
 * 
 * This string contains 3 as, 3 bs, 1 c, 1 d, 1 e, and 1 f (and 0 of every other letter),
 * so since there aren't any letters that appear more frequently than the previous 
 * letter, this string qualifies as beautiful.
 * 
 * [execution time limit] 4 seconds (js)
 * [input] string inputString
 * 
 * [output] boolean
 * Return true if the string is beautiful, false otherwise.
 * 
 * Tests passed: 20/20.
 */
function solution(inputString) {
    const alphabet = [];
    const a = 'a'.charCodeAt();
    const z = 'z'.charCodeAt();

    for (let i = a; i <= z; i++) {
        alphabet.push(String.fromCharCode(i));
    }

    const letters = Array(alphabet.length).fill(0);

    for (let i of inputString) {
        letters[alphabet.indexOf(i)]++;
    }

    for (let i = 0; i < letters.length; i++) {
        if (letters[i + 1] > letters[i]) return false;
    }
    return true;
}