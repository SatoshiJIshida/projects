/**
 * Proper nouns always begin with a capital letter, followed by small letters.
 * Correct a given proper noun so that it fits this statement.
 * 
 * Example:
 * For noun = "pARiS", the output should be solution(noun) = "Paris";
 * 
 * [execution time limit] 4 seconds (js)
 * [input] string noun
 * 
 * [output] string
 * 
 * Tests passed: 20/20.
 */
function solution(noun) {
    noun = noun.toLowerCase();
    let toUpper = noun.charAt(0);
    toUpper = toUpper.toUpperCase();
    const change = noun.slice(1, noun.length);
    noun = toUpper.concat(change);
    return noun;
}