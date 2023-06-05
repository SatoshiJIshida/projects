/**
 * Once Mary heard a famous song, and a line from it stuck in her head.
 * That line was "Will you still love me when I'm no longer young and beautiful?".
 * Mary believes that a person is loved if and only if he/she is both young and beautiful,
 * but this is quite a depressing thought, so she wants to put her belief to the test.
 * Knowing whether a person is young, beautiful and loved, find out if they contradict Mary's belief.
 * A person contradicts Mary's belief if one of the following statements is true:
 * they are young and beautiful but not loved;
 * they are loved but not young or not beautiful.
 * 
 * Example:
 * For young = true, beautiful = true, and loved = true, the output should be
 * solution(young, beautiful, loved) = false.
 * 
 * [execution time limit] 4 seconds (js)
 * [input] boolean young, boolean beautiful, boolean loved
 * 
 * [output] boolean
 * true if the person contradicts Mary's belief, false otherwise.
 * 
 * Tests passed: 8/8.
 */
function solution(young, beautiful, loved) {
    if (young === true && beautiful === true && loved === true) {
        return false;
    } else if (young === false && beautiful === false && loved === false) {
        return false;
    } else if (young === false && beautiful === true && loved === false) {
        return false;
    } else if (young === true && beautiful === false && loved === false) {
        return false;
    } else {
        return true;
    }
}