/**
 * You found two items in a treasure chest! The first item weighs weight1 and is worth
 * value1, and the second item weighs weight2 and is worth value2. What is the total
 * maximum value of the items you can take with you, assuming that your max weight
 * capacity is maxW and you can't come back for the items later?
 * 
 * Note that there are only two items and you can't bring more than one item of each
 * type, i.e. you can't take two first items or two second items.
 * 
 * Example:
 * For value1 = 10, weight1 = 5, value2 = 6, weight2 = 4, and maxW = 8,
 * the output should be
 * solution(value1, weight1, value2, weight2, maxW) = 10.
 * 
 * [execution time limit] 4 seconds (js)
 * [input] integer value1, integer weight1, integer value2, integer weight2, integer maxW
 * 
 * [output] integer
 * 
 * Tests passed: 15/15.
 */
function solution(value1, weight1, value2, weight2, maxW) {
    if (maxW < weight1 && maxW < weight2) return 0;
    if (maxW === weight1 && maxW < weight2) return value1;
    if (maxW === weight2 && maxW < weight1) return value2;
    if (maxW < weight1+weight2) return Math.max(value1, value2);
    if (maxW >= weight1+weight2) return value1+value2;
}