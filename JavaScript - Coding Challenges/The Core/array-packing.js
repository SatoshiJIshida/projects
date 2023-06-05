/**
 * You are given an array of up to four non-negative integers, each less than 256.
 * Your task is to pack these integers into one number M in the following way:
 * The first element of the array occupies the first 8 bits of M;
 * The second element occupies next 8 bits, and so on.
 * Return the obtained integer M.
 * Note: the phrase "first bits of M" refers to the least significant bits of M - the right-most bits of an integer.
 * For further clarification see the following example.
 * 
 * Example:
 * For a = [24, 85, 0], the output should be
 * solution(a) = 21784.
 * An array [24, 85, 0] looks like [00011000, 01010101, 00000000] in binary.
 * After packing these into one number we get 00000000 01010101 00011000 (spaces are placed for convenience), which equals to 21784.
 * 
 * [execution time limit] 4 seconds (js)
 * [input] array.integer a
 * 
 * [output] integer
 * 
 * Tests passed: 10/10.
 */
function solution(a) {
    const collection = [];
    for (let i = 0; i < a.length; i++) {
        let conversion = (a[i] >>> 0).toString(2);
        collection.push(conversion);
    }
    for (let i = 0; i < collection.length; i++) {
        while (collection[i].length < 8) {
                collection[i] = '0' + collection[i];
        }
    }
    collection.reverse();
    const join = collection.join(''),
          result = parseInt(join, 2);
    return result;
}