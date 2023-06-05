/**
 * Consider a sequence of numbers a0, a1, ..., an, in which an element is equal to the sum of
 * squared digits of the previous element. The sequence ends once an element that has already
 * been in the sequence appears again. Given the first element a0, find the length of the sequence.
 * 
 * Example:
 * For a0 = 16, the output should be solution(a0) = 9.
 * 
 * Here's how elements of the sequence are constructed:
 * 
 * a0 = 16
 * a1 = 1^2 + 6^2 = 37
 * a2 = 3^2 + 7^2 = 58
 * a3 = 5^2 + 8^2 = 89
 * a4 = 8^2 + 9^2 = 145
 * a5 = 1^2 + 4^2 + 5^2 = 42
 * a6 = 4^2 + 2^2 = 20
 * a7 = 2^2 + 0^2 = 4
 * a8 = 4^2 = 16, which has already occurred before, in (a0)
 * 
 * [execution time limit] 4 seconds (js)
 * [input] integer a0
 * 
 * [output] integer
 * 
 * Tests passed: 12/12.
 */
function solution(a0) {
    let result = 0,
        collection = [a0],
        flag = false,
        counter = 1;
    const input = collection[collection.length-1];
    
    const process = ((input) => {
        const num = ""+input;
        for (let i = 0; i < num.length; i++) {
            result += Math.pow(parseInt(num[i]), 2);
        }
        counter++;
        if (collection.includes(result)) {
            flag = true;
        }
        collection.push(result);
        result = 0;
    });
    while (flag === false) {
        process(collection[collection.length-1]);
    }
    return counter;
}