/**
 * Reverse the order of the bits in a given integer.
 * 
 * Example:
 * For a = 97, the output should be
 * solution(a) = 67.
 * 97 equals to 1100001 in binary, which is 1000011 after mirroring, and that is 67 in base 10.
 * 
 * For a = 8, the output should be
 * solution(a) = 1.
 * 
 * [execution time limit] 4 seconds (js)
 * [input] integer a
 * 
 * [output] integer
 * 
 * Tests passed: 10/10.
 */
function solution(a) {
    const conversion = a.toString(2),
          reverse = conversion.split('').reverse('').join('');
    let   result = 0;
    return result = parseInt(reverse, 2);
}