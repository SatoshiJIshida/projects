/**
 * You found two items in a treasure chest! The first item weighs weight1 and is worth value1,
 * and the second item weighs weight2 and is worth value2. What is the total maximum value of the
 * items you can take with you, assuming that your max weight capacity is maxW and you can't come
 * back for the items later?
 * 
 * Note that there are only two items and you can't bring more than one item of each type, i.e.
 * you can't take two first items or two second items.
 * 
 * Example:
 * For value1 = 10, weight1 = 5, value2 = 6, weight2 = 4, and maxW = 8, the output should be
 * solution(value1, weight1, value2, weight2, maxW) = 10.
 * You can only carry the first item.
 * 
 * [execution time limit] 3 seconds (java)
 * [input] integer value1
 * [input] integer weight1
 * [input] integer value2
 * [input] integer weight2
 * [input] integer maxW
 * 
 * [output] integer
 * 
 * Tests passed: 15/15.
 */
int solution(int value1, int weight1, int value2, int weight2, int maxW) {
    int result = 0;
    if (maxW < weight1 && maxW < weight2) return 0;
    if (maxW == weight1 && maxW < weight2) return value1;
    if (maxW == weight2 && maxW < weight1) return value2;
    if (maxW < weight1+weight2) result = Math.max(value1, value2);
    if (maxW >= weight1+weight2) result = value1+value2;
    return result;
}
