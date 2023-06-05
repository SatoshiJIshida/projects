/**
 * You are given two numbers a and b where 0 ≤ a ≤ b.
 * Imagine you construct an array of all the integers from a to b inclusive.
 * You need to count the number of 1s in the binary representations of all the numbers in the array.
 * 
 * Example:
 * For a = 2 and b = 7, the output should be
 * solution(a, b) = 11.
 * Given a = 2 and b = 7 the array is: [2, 3, 4, 5, 6, 7].
 * Converting the numbers to binary, we get [10, 11, 100, 101, 110, 111],
 * which contains 1 + 2 + 1 + 2 + 2 + 3 = 11 1s.
 * 
 * [execution time limit] 4 seconds (js)
 * [input] integer a, integer b
 * 
 * [output] integer
 * 
 * Tests passed: 10/10.
 */
function solution(a, b) {
    const collection = [a.toString(2)];
    let   count = a,
          countOnes = 0;
    while (count < b) {
        count += 1;
        collection.push(count.toString(2));
    }
    const join = collection.join('');
    for (let i = 0; i < join.length; i++) {
        if (join[i] === '1') {
            countOnes += 1;
        }
    }
    return countOnes;
}