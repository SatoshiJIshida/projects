/**
 * You're given three integers, a, b and c. It is guaranteed
 * that two of these integers are equal to each other.
 * What is the value of the third integer?
 * 
 * Example:
 * For a = 2, b = 7, and c = 2, the output should be
 * solution(a, b, c) = 7.
 * The two equal numbers are a and c. The third number (b) equals 7, which is the answer.
 * 
 * [execution time limit] 4 seconds (js)
 * [input] integer a, integer b, integer c
 * 
 * [output] integer
 * 
 * Tests passed: 20/20.
 */
function solution(a, b, c) {
    if (a === b) {
        return c;
    } else if (a === c) {
        return b;
    } else  {
        return a;
    }
}