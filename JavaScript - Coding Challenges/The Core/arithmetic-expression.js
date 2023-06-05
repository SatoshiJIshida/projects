/**
 * Consider an arithmetic expression of the form a#b=c.
 * Check whether it is possible to replace # with one of
 * the four signs: +, -, * or / to obtain a correct expression. 
 * 
 * Example:
 * For a = 2, b = 3, and c = 5, the output should be
 * solution(a, b, c) = true.
 * We can replace # with a + to obtain 2 + 3 = 5, so the answer is true.
 * 
 * [execution time limit] 4 seconds (js)
 * [input] integer a, integer b, integer c
 * 
 * [output] boolean
 * true if the desired replacement is possible, false otherwise.
 * 
 * Tests passed: 22/22.
 */
function solution(a, b, c) {
    if ((a+b) === c) {
        return true;
    } else if ((a-b) === c) {
        return true;
    } else if ((a*b) === c) {
        return true;
    } else if ((a/b) === c) {
        return true;
    } else {
        return false;
    }
}